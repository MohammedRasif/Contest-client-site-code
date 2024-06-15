
import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router-dom";

const AllContestDetails = () => {
    const contests = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const contest = contests.find(contest => contest.id === idInt);
    return (
        <div className="mx-52 pt-24">
            <img src={contest.Image} className="h-[400px] w-full" alt="" />
            <div className="flex items-center">
            <h1 className="text-4xl font-bold my-2">{contest.ContestName}</h1>

            </div>
            <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
            <h1 className=" my-5">{contest.ContestDescription}</h1>
            <h1 className="text-2xl font-bold my-2">Contest Price:{contest.contestPrice}</h1>
            <Link to="/payment"><button className="btn glass bg-blue-600 w-full text-white">Register Now..........</button>
            </Link>
        </div>
    );
};

export default AllContestDetails;


















