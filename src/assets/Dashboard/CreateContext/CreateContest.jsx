import { useLoaderData } from "react-router-dom";
import useContests from "../../hooks/useContests";
import CreateContestss from "./CreateContestss"; // Import Route 2 Component
import useAuth from "../../hooks/useAuth";

const CreateContest = () => {
  const contests  = useLoaderData(); 
 
  console.log(contests); 


  return (
    <div className="w-[1260px]">
      <h1 className="text-5xl font-bold text-center text-blue-500 my-5">Create Contest</h1>
      <div className="overflow-x-auto">
        <table className="table bg-slate-200">
          <thead>
            <tr>
              <th>Image</th>
              <th className="text-center">Name</th>
              <th className="pl-24">Status</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest) => (
              <CreateContestss key={contest._id}  contests={contest} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateContest;
