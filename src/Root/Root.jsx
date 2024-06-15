import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../assets/Component/Navbar/Navbar";
import Footer from "../assets/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;