import { GoArrowRight } from "react-icons/go";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const Populars = ({ blogs }) => {
  const { ContestName, id, Image, Attempted, ContestDescription, rating } =
    blogs;

  return (
    <div className="  bg-slate-200 ">
      <div className=" flex flex-col lg:flex-row">
        <img src={Image} className="max-w-sm h-56 w-44  shadow-2xl" />
        <div className="ml-10">
          <h1 className="text-5xl text-blue-500 ">0{id}</h1>
          <p className="pt-5 text-xl font-bold">{ContestName}</p>
          <p className="mt-3">{ContestDescription}</p>
          <div className="flex items-center  m-2">
            <div className="flex items-center ">
              <LuBadgeDollarSign className="text-xl font-bold text-blue-500"></LuBadgeDollarSign>
              <h1 className="ml-2">{Attempted}</h1>
            </div>
            <div className="flex items-center ml-5 " >
              <MdOutlineStar className="text-xl font-bold text-blue-500"></MdOutlineStar>
              <h1 className="ml-2">{rating}</h1>
            </div>
            <Link to={`/blogs/${id}`}><button className="btn bg-blue-500 btn-primary text-xl font-bold ml-56">
              <GoArrowRight></GoArrowRight>
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Populars;
