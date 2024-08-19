import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Privider/AuthProvider";
import { imageUpload } from "../api/Index";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    
    

      const { createUser ,signInWithGoogle, updateUserProfile } = useContext(AuthContext);
      const navigate = useNavigate()

      const handleSubmit = async e =>{
        e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value 
    const password = form.password.value 
    const image = form.image.files[0]
   
    try{
      
     const image_url = await imageUpload(image)
      const result = await createUser(email,password)
      console.log(result)

      await updateUserProfile(name,image_url)
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
        <div className="hero min-h-screen bg-base-200 pt-20">
        <div className="hero-content flex-col text-blue-500">
            <div className="text-center ">
            <h1 className="text-5xl font-bold ">Register Now...!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}  className="card-body">
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>


            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>


            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
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
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>


                
                <div className="form-control">
            

                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <input  className="btn bg-blue-500 text-white hover:bg-blue-700" type="submit" value="Sign Up" />
                </div>
            </form>

            <button  onClick={handleGoogleLogin} className="pl-40 text-3xl"><FaGoogle></FaGoogle></button>

                
                <p className="mx-8">Already have Account ? please 
            <Link to="/login">
             <button className="btn btn-link">Login</button>
            </Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Register;