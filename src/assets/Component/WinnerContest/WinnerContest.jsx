import { useLoaderData } from "react-router-dom";
import WinnerContests from "./WinnerContests";
import img1 from "../../../image/all contest/aaaaa.webp";
import img2 from "../../../image/all contest/ff.jpg";
import img3 from "../../../image/all contest/g.webp";

const WinnerContest = () => {
  const winner = useLoaderData();
  return (
    <div className="pt-16">
      {/* <h1>this is winner contes page{winner.length}</h1> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fr1H5ns/blob-scene-haikei.png)",
        }}
      >
        <div className=""></div>
        <div className=" text-center ">
          <div className="">
            <h1 className="mb-5 text-8xl text-orange-400 font-bold">
              GIVEAWAY
            </h1>
            <h1 className="text-4xl px-4 py-2 mx-96  text-white bg-red-600 rounded-3xl">
              WINNER
            </h1>
            <div className="mt-3 ml-20  flex">
              <div className="mt-20">
                <img
                  src={img2}
                  className="rounded-full border-x-8 ml-24 border-y-8 border-orange-400 h-64 w-64"
                  alt=""
                />
                <h1 className="text-orange-400 ml-20 text-xl font-bold">
                  {" "}
                  Business Idea Concerts
                </h1>
              </div>
              <div>
                <img
                  src={img1}
                  className="rounded-full border-x-8 ml-24 border-y-8 border-orange-400 h-64 w-64"
                  alt=""
                />
                <h1 className="text-orange-400 ml-20 text-xl font-bold">
                  {" "}
                  Image Design Contests
                </h1>
              </div>
              <div className="mt-20">
                <img
                  src={img3}
                  className="rounded-full border-x-8 ml-24 border-y-8 border-orange-400 h-64 w-64"
                  alt=""
                />
                <h1 className="text-orange-400  ml-24 text-xl font-bold">
                  {" "}
                  Movie Review
                </h1>
              </div>
            </div>
            <p className="mb-5 text-orange-400 mx-96 mt-5">
              We are thrilled to announce the winner of our latest contest!
              Congratulations to Winner's Name, whose outstanding creativity
              and dedication truly impressed us all. Winner's Name stood out
              among numerous talented participants with their innovative
              approach and unique perspective, showcasing exceptional skill and
              passion. The winning entry captivated the judges with its
              originality, depth, and attention to detail, making it a standout
              submission. 
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        {winner.map((winning) => (
          <WinnerContests key={winning._id} winning={winning}></WinnerContests>
        ))}
      </div> */}
    </div>
  );
};

export default WinnerContest;
