import img1 from "../../../image/banner/banner.jpg"
const Banner = () => {
    return (
        <div  className=" relative w-full  ">
        <img src={img1} className="w-full h-[700px]"  />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]  ">
        <div className="text-white space-y-7 pl-20 ">
            <h1 className="text-6xl font-bold  ">Welcome To <span className="text-blue-500">Wining-Zone</span></h1>
           <div className="w-80 flex  text-black">
           <div>
           <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-black opacity-40"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
           </div>
            <button className=" px-7 btn glass text-white hover:text-blue-500 bg-blue-500 rounded-xl ml-3 py-3">Search</button>
           </div>
            <div>
                <button className="btn btn-outline text-white hover:bg-orange-400 rounded-3xl px-5 mr-6">SEE MORE....</button>
                <button className="btn btn-outline text-white hover:bg-orange-400 rounded-3xl px-5 ">JOIN NOW...</button>
            </div>
        </div>
        </div>
       
        
    </div> 
    );
};

export default Banner;