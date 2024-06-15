import { MdTipsAndUpdates } from "react-icons/md";
import img1 from "../../../image/lates/horizon.jpeg"
import img2 from "../../../image/lates/kung fu panda.jpg"
import img3 from "../../../image/lates/minions.jpg"
import img4 from "../../../image/lates/sonic.jpg"

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";



const LatesNews = () => {
    return (
        <div className="mt-20 ">
            <div className="flex items-center mb-20">
                <MdTipsAndUpdates className="text-4xl mr-4 text-blue-500"></MdTipsAndUpdates>
                <h1 className="text-4xl font-bold">LATEST NEWS</h1>
            </div>
           <div className="flex">
           <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 w-2/3">
                <div className=" ">
                    <img src={img1} className="h-64 w-96"  alt="" />
                    <div className="flex"> 
                    <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
                    <div className="mt-2 text-blue-500 flex items-center space-x-1">
                        <FaComment></FaComment>
                        <h1>COMMENT OFF</h1>
                    </div>
                    </div>
                    <h1 className="text-2xl my-2">HORIZON ZERO DAWN GAME</h1>
                    <h1 className="pr-10">For instance, are you asking for a summary of a specific animated movie, a general description of a certain type or genre of animated movies, or a plot outline for an original animated movie idea</h1>
                </div>

                <div className=" ">
                    <img src={img2} className="h-64 w-96"  alt="" />
                    <div className="flex"> 
                    <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
                    <div className="mt-2 text-blue-500 flex items-center space-x-1">
                        <FaComment></FaComment>
                        <h1>COMMENT OFF</h1>
                    </div>
                    </div>
                    <h1 className="text-2xl my-2 uppercase">kung fu panda</h1>
                    <h1 className="pr-10">For instance, are you asking for a summary of a specific animated movie, a general description of a certain type or genre of animated movies, or a plot outline for an original animated movie idea</h1>
                </div>

                <div className=" ">
                    <img src={img3} className="h-64 w-96"  alt="" />
                    <div className="flex"> 
                    <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
                    <div className="mt-2 text-blue-500 flex items-center space-x-1">
                        <FaComment></FaComment>
                        <h1>COMMENT OFF</h1>
                    </div>
                    </div>
                    <h1 className="text-2xl my-2 uppercase">minions</h1>
                    <h1 className="pr-10">For instance, are you asking for a summary of a specific animated movie, a general description of a certain type or genre of animated movies, or a plot outline for an original animated movie idea</h1>
                </div>

                <div className=" ">
                    <img src={img4} className="h-64 w-96"  alt="" />
                    <div className="flex"> 
                    <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
                    <div className="mt-2 text-blue-500 flex items-center space-x-1">
                        <FaComment></FaComment>
                        <h1>COMMENT OFF</h1>
                    </div>
                    </div>
                    <h1 className="text-2xl my-2 uppercase">sonic</h1>
                    <h1 className="pr-10">For instance, are you asking for a summary of a specific animated movie, a general description of a certain type or genre of animated movies, or a plot outline for an original animated movie idea</h1>
                </div>
            </div>
            <div className="w-1/3 bg-black">
                <div className="text-white bg-gray-800  flex items-center">
                    <CiPlay1 className="text-7xl m-5 mt-10"></CiPlay1>
                    <div>
                    <h1 className="text-3xl">HORIZON ZERO DAWN GAME</h1>
                    <h1>For instance, are you asking for a summary of a specific animated movie</h1>
                    </div>
                </div>
                <div className="text-white bg-gray-800 mt-5 flex items-center">
                    <CiPlay1 className="text-7xl m-5 mt-10"></CiPlay1>
                    <div>
                    <h1 className="text-3xl">KUNG FU PANDA</h1>
                    <h1>For instance, are you asking for a summary of a specific animated movie</h1>
                    </div>
                </div>
                <div className="text-white bg-gray-800 mt-5 flex items-center">
                    <CiPlay1 className="text-7xl m-5 mt-10"></CiPlay1>
                   <div>
                   <h1 className="text-3xl">MINIONS</h1>
                    <h1>For instance, are you asking for a summary of a specific animated movie</h1>
                   </div>
                </div>
                <div className="text-white bg-gray-800 mt-5 flex items-center">
                    <CiPlay1 className="text-7xl m-5 mt-10"></CiPlay1>
                    <div>
                    <h1 className="text-3xl">SONIC</h1>
                    <h1>For instance, are you asking for a summary of a specific animated movie</h1>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
    );
};

export default LatesNews;