import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Privider/AuthProvider";
import { FaHome, FaPager } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { GoFileSubmodule } from "react-icons/go";
import { MdManageAccounts, MdOutlineSettings } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiPodiumWinner } from "react-icons/gi";
import useAdmin from "../../hooks/useAdmin";






const Dashboard = () => {
    const { user }=useContext(AuthContext)

    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-blue-800">
                <img src={user?.photoURL} className="h-44 rounded-full border border-x-4 border-y-4 m-10" alt="" />
                <h1 className="ml-14  text-4xl text-white ">{user?.displayName}</h1>
                <h1 className="ml-10 mb-6 text-white">Welcome to your profile</h1>
               <ul className="  text-white ">
               {
                isAdmin ? <>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/manageUser"> <div className="flex items-center "> <MdManageAccounts className="mr-2 "></MdManageAccounts> Manage User</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/manageContest"> <div className="flex items-center "> <MdManageAccounts  className="mr-2 "></MdManageAccounts > Manage Contest </div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/addContest"> <div className="flex items-center "> <FaPager className="mr-2 "></FaPager> Add Contest </div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/CreateContest"> <div className="flex items-center "><IoCreateSharp className="mr-2 "></IoCreateSharp> Created Contest</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/contestSubmit"> <div className="flex items-center "><GoFileSubmodule className="mr-2 "></GoFileSubmodule> Contest Submitted</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/participatedContest"> <div className="flex items-center "> <FaPager className="mr-2 "></FaPager> Participated Contest </div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/winningContest"> <div className="flex items-center "> <FaPager className="mr-2 "></FaPager> Winning Contest </div></NavLink></li>

                
                </> 
                :
                <>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/addContest"> <div className="flex items-center "> <FaPager className="mr-2 "></FaPager> Add Contest </div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/CreateContest"> <div className="flex items-center "><IoCreateSharp className="mr-2 "></IoCreateSharp> Created Contest</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/contestSubmit"> <div className="flex items-center "><GoFileSubmodule className="mr-2 "></GoFileSubmodule> Contest Submitted</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/participatedContest"> <div className="flex items-center "> <FaPager className="mr-2 "></FaPager> Participated Contest </div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/dashboard/winningContest"> <div className="flex items-center "> <GiPodiumWinner className="mr-2 "></GiPodiumWinner> Winning Contest </div></NavLink></li>
                
                </>
               }
                
                <div className="divider font-bold divider-success"></div>
                <li className=" p-2  pl-5"><NavLink to="/"> <div className="flex items-center "><FaHome className="mr-2 "></FaHome> Home</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/"> <div className="flex items-center "><MdOutlineSettings className="mr-2 "></MdOutlineSettings> Setting</div></NavLink></li>
                <li className=" p-2  pl-5"><NavLink to="/"> <div className="flex items-center "><IoMdContact className="mr-2 "></IoMdContact> Contact</div></NavLink></li>

               </ul> 
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;