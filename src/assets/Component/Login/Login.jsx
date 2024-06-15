import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Privider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const {signInWithGoogle,signIn} = useContext(AuthContext);

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () =>{

        signInWithGoogle()
        .then(result =>{
            //console.log(result.user);
            const userInfo = {
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                if(res?.data){
                    navigate('/')
                }
                //console.log(res.data)
                
            })
        })
        .catch(error => console.log(error))



    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                if(user){
                    Swal.fire({
                        title: 'User Login Successful.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
                //console.log(user);
                
                navigate(from, { replace: true });
            })
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
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password"  className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
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