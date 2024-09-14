import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../src/assets/hooks/useAxiosPublic";
import axios from "axios";

export const AuthContext = createContext(true);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially set to true, as the app is loading user data
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error("Error creating user:", error);
      })
      .finally(() => setLoading(false));
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      })
      .finally(() => setLoading(false));
  };

  // Log out
  const logOut = async () => {
    setLoading(true);
    return signOut(auth)
      .catch((error) => {
        console.error("Error logging out:", error);
      })
      .finally(() => setLoading(false));
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error("Error signing in:", error);
      })
      .finally(() => setLoading(false));
  };

  // Get token from server
  const getToken = async (email) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email },
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };

  // Save user in database
  const saveUser = async (user) => {
    if (!user?.email) return;
    const currentUser = {
      email: user.email,
      role: "guest",
      status: "Verified",
    };
    try {
      const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser);
      return data;
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(true);

      if (currentUser) {
        await getToken(currentUser.email);
        await saveUser(currentUser);
      } else {
        setUser(null); // Set user to null if logged out
      }

      setLoading(false); // Done loading, set to false
    });

    return () => unsubscribe();
  }, []);

  // Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    setUser,
    setLoading,
    updateUserProfile,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
