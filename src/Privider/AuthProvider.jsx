import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../src/assets/hooks/useAxiosPublic"
import axios from "axios";

export const AuthContext = createContext(true)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic();

    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   
    
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

      const logOut = async () => {
        setLoading(true)
        return signOut(auth)
      }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


      // Get token from server
  const getToken = async email => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    )
    return data
  }

    
     //save user
  const saveUser = async user =>{
    const currentUser ={
      email:user?.email,
      role:'guest',
      status:'Verified'
    }
    const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/user`,currentUser)
    return(data)
  }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          if (currentUser) {
            getToken(currentUser.email)
            saveUser(currentUser)
          }
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])


    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    //         setUser(currentUser);
    //         if(currentUser){
    //             saveUser(currentUser)
    //             const userInfo = {email:currentUser.email};
    //             axiosPublic.post('/jwt',userInfo)
    //             .then(res => {
    //                 if(res.data.token){
    //                     localStorage.setItem('access-token',res.data.token);

    //                 }
    //             })
    //         }
    //         else{
    //             localStorage.removeItem('access-token');
    //         }
    //         setLoading(false)
    //     })
    //     return () =>{
    //         return unsubscribe
    //     }
    // },[axiosPublic])


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }




    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        setUser,
        setLoading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;