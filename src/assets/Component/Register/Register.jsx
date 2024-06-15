import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Privider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const { createUser , updateUserProfile } = useContext(AuthContext);
      const navigate = useNavigate()


      const onSubmit = data =>{
         //console.log(data);
         createUser(data.email,data.password)
         .then(result =>{
            const loggedUser = result.user;
            //console.log(loggedUser);
            updateUserProfile(data.name , data.photoURL)
            .then(()=>{
                const userInfo = {
                    name:data.name,
                    email:data.email
                }
                axiosPublic.post('users',userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        //console.log('user added to the database')
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    }
                })
               
            })
            .catch(error => console.log(error))
         })
        };

    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col text-blue-500">
            <div className="text-center ">
            <h1 className="text-5xl font-bold ">Register Now...!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" {...register("name",{ required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">This field is required</span>}
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Your Name" {...register("photoURL",{ required: true })}  className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">This field is required</span>}
                </div>

              

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email",{ required: true })} name="email" className="input input-bordered" required />
                {errors.email && <span className="text-red-600">This field is required</span>}
                </div>

                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password",{ required: true })} name="password"  className="input input-bordered"required />
                {errors.password && <span className="text-red-600">This field is required</span>}

                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <input  className="btn bg-blue-500 text-white hover:bg-blue-700" type="submit" value="Sign Up" />
                </div>
            </form>
                
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