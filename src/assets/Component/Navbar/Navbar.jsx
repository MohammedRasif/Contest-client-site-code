import { Link, NavLink } from "react-router-dom";
import img from "../../../image/logo-removebg-preview.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../../Privider/AuthProvider";
import HostRequestModal from "../Modal/HostRequestModal";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Navbar = () => {
    const [isModalOpen , setIsModalOpen]=useState(false)
    const axiosSecure = useAxiosSecure()
    const { user,logOut }=useContext(AuthContext)

    const closeModal = () =>{
        setIsModalOpen(false)
    }
    const HandleModal=async()=>{
        console.log('i want to be a host')
    try {
      const currentUser ={
        email:user?.email,
        role:'guest',
        status:'Requested'
      }
      const {data} = await axiosSecure.put(`/user`,currentUser)
      console.log(data)
      if(data.modifiedCount > 0){
        toast.success('Success..! please wait for admin confirmation')
      } else{
        toast.success('please..! wait for admin approval')
      }
    }catch(error){
      console.log(error)
      toast.error(error.message )
    }finally{
      closeModal()
    }
    }

     const navLinks = <>
    <li> <NavLink to="/">Home</NavLink> </li>
    <li> <NavLink to="/allContest">All Contest </NavLink></li>
    <li> <NavLink to="/WinnerContest">Winner Contest</NavLink> </li>  
    <li> <NavLink to="/register">Register</NavLink> </li>
    <li> <NavLink to="/contact">Contact Us</NavLink> </li>
    </>
    return (
        <div >

        <div className="navbar  bg-slate-200 fixed z-10 bg-opacity-30 max-w-screen-full text-black tone-700  ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <div className=" flex  font-bold">
                        <img src={img} className="h-14 ml-10" alt="" />
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <button
                      // disabled={!user}
                      onClick={()=>setIsModalOpen(true)}
                      className='disabled:cursor-not-allowed  cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                    >
                      Host 
             </button>
            <HostRequestModal isOpen={isModalOpen} closeModal={closeModal} HandleModal={HandleModal}></HostRequestModal>
            <div className="navbar-end">
            {
                        user ?

                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10  ring ring-black rounded-full">
                                            <img className="" alt="User Image" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        
                                        <img src={user?.photoURL} className="h-20 w-20 rounded-full ml-14" alt="" />
                                         <p className="text-blue-500 text-center text-xl">{user?.displayName}</p>
                                         
                                         <Link to="/dashboard/profile"><h1 className="px-3 py-2 bg-gray-200 my-1 font-bold">My Profile</h1></Link>
                                         
                                        <li><button onClick={logOut} className="btn text-white  bg-blue-500 hover:bg-blue-950 hover:text-white">Logout</button></li>
                                    </ul>
                           </div>
                            </>
                            :
                            <Link to="/login"><button className=" btn font-bold text-2xl mr-5">Login</button></Link>

                    }      
            </div>

            </div>
      
            </div>
    );
};

export default Navbar;