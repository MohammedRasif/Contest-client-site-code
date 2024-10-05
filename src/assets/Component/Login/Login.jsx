import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Privider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
  
    const {signInWithGoogle,signIn} = useContext(AuthContext);
    const [email,setEmail] = useState()
    const handleLogin = async e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        setEmail(email)
        const password = form.password.value 
          
        try{
         
          await signIn(email,password)
          navigate('/')
          toast.success('SignUp Successful')
        }catch(error){
          console.log(error)
          toast.error(error.message)
         
    
        }
    
      }

    const handleGoogleLogin= async () =>{
    
    try {
      await signInWithGoogle()
      navigate('/')
      toast.success('SignUp Successful')
    } catch(error) {
      console.log(error)
      toast.error(error.message)

    }
  }



   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col text-blue-500 ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now...!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                onBlur={e => setEmail(e.target.value)}
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
            <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary text-white bg-blue-500">Login</button>
                    </div>
                </form>
                <div className="flex justify-center m-3 text-2xl">
                <button onClick={handleGoogleLogin} className="pr-3"><FaGoogle></FaGoogle></button>
                <button className="pr-3"><FaFacebook></FaFacebook></button>
                <button><FaGithub></FaGithub></button>
                 </div>
                    <p className="mx-8">New Here ? please 
                <Link to="/register">
                 <button className="btn btn-link">Register</button>
                </Link> </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;