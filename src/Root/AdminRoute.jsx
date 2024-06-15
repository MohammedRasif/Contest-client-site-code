import { useLocation } from "react-router-dom";
import useAdmin from "../assets/hooks/useAdmin";
import useAuth from "../assets/hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user , loading}= useAuth();
    const [ isAdmin,isAminLoading]=useAdmin()
    const location = useLocation();
    if(loading || isAminLoading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default AdminRoute;