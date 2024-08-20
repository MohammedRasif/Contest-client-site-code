import { useContext } from "react";
import { AuthContext } from "../../Privider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="hero w-[1280px] min-h-full"
      style={{
        backgroundImage: "url(https://i.ibb.co/nbydw2k/profile-bg.png)",
      }}
    >
      {/* <h1 className="ml-[520px] text-blue-400 text-6xl font-bold ">Profile</h1>
            <div className="">
                <img className="w-64 rounded-full mt-12 ml-[480px]" alt="User Image" src={user?.photoURL} />
                <h1 className="text-blue-500 text-center text-4xl mt-12">{user?.displayName}</h1>
            </div> */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10  ">
          <img
            src={user?.photoURL}
            
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{user?.displayName}</h2>
          <p>Hello.....! Welcome to Your Profile</p>
          <div className="card-actions">
            <button className="btn glass bg-blue-500 text-white mt-5">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
