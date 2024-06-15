import { useLoaderData, useParams } from "react-router-dom";
import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";
import { FcLikePlaceholder  } from "react-icons/fc";

const PopularDetails = () => {
    const blogs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const blog = blogs.find(blog => blog.id === idInt);
    return (
        <div className="mx-52 pt-24">
            <img src={blog.Image} className="h-[400px] w-full" alt="" />
            <div className="flex items-center">
            <h1 className="text-4xl font-bold my-2">Movie name: {blog.ContestName}</h1>
                <div className="flex items-center ml-[500px]">
                    <div className="flex items-center text-white rounded-lg bg-red-600 text-2xl">
                        <FaRegComments className="mx-3"></FaRegComments>
                        <h1 className="pr-3">0</h1>
                    </div>
                    <div className="flex ml-10 items-center text-white rounded-lg bg-black text-2xl">
                        <FcLikePlaceholder  className="mx-3"></FcLikePlaceholder >
                        <h1 className="pr-3">1000</h1>
                    </div>
                </div>
                
            </div>
            <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
            <h1 className=" my-5">{blog.ContestDescription}</h1>
        </div>
    );
};

export default PopularDetails;