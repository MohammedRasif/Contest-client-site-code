import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllContestss = ({ contests }) => {
  const { ContestName, id, participants, Image, ContestDescription } = contests;
  return (
    <div>
      <div>
        <img src={Image} className=" h-96 w-[650px] " alt="" />
        <h1 className="text-4xl font-bold">{ContestName}</h1>
        <p className=" my-2 mr-24">
          {ContestDescription}
        </p>
        <div>
          <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
            <h1 className="mr-2">Contest Deadline:</h1>
            <FaRegCalendarAlt></FaRegCalendarAlt>
            <h1>Oct 11 2024</h1>
          </div>
        </div>
        <Link to={`/contest/${id}`}><button className="btn glass my-3 bg-blue-500">see details</button></Link>
      </div>
    </div>
  );
};

export default AllContestss;
