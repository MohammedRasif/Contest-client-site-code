import img from "../../image/logo-removebg-preview.png"
const Footer = () => {
    return (
        <div className="text-white">
            <h1 className="text-white">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <footer className="footer p-10 bg-black text-base-content ">
            
            <aside>
                <img src={img}  className="h-48" alt="" />
                
            </aside> 
            <nav className="text-white">
                <h6 className="footer-title text-white">Useful Links</h6> 
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Terms of service</a>
                <a className="link link-hover">Privacy policy</a>

            </nav> 
            <nav className="text-white">
                <h6 className="footer-title text-white">Our Services</h6> 
                <a className="link link-hover ">Web Design</a>
                <a className="link link-hover">Web Development</a>
                <a className="link link-hover">Product Management</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Graphic Design</a>

            </nav> 
            <nav className="text-white">
            <h6 className="footer-title text-white">Location</h6> 
            <p>A108 Adam Street<br/>Anowara,Chottogram <br />Bangladesh </p>
            </nav>
            </footer>
            <div className="bg-stone-900 ">
            <h1 className=" pb-3">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
                <div className="text-center py-5 text-white ">
                    <h1>© Copyright <span className="font-bold">Moviez</span>. All Rights Reserved</h1>
                    <h1>Designed by <span className=""> Mohammed Rasif</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;