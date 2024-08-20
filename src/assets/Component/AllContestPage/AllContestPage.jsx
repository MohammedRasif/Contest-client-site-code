import { useEffect, useState } from "react";
import AllContestss from "./AllContestss";

const AllContestPage = () => {
    const [contest,setContest] = useState([]);
    useEffect(() =>{
        fetch('https://movie-review-server-site.vercel.app/allContests')
        .then(res => res.json())
        .then(data => setContest(data))
    },[])
    return (
        <div  className="mx-20 pt-20">
            <div className="flex items-center mb-20">
                
                <h1 className="text-5xl text-blue-500 font-bold text-center">All Contest</h1>
            </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-4 ">
            {
                contest.map(contests =><AllContestss key={contests.id} contests={contests}></AllContestss>)
            }
        </div>
        </div>
    );
};



export default AllContestPage;