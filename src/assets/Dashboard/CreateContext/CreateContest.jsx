import useContests from "../../hooks/useContests";
import CreateContestss from "./CreateContestss"; // Import Route 2 Component

const CreateContest = () => {
  const [contest] = useContests(); // Fetch contests using custom hook

  return (
    <div className="w-[1260px]">
      <h1 className="text-5xl font-bold text-center text-blue-500 my-5">Create Contest</h1>
      <div className="overflow-x-auto">
        <table className="table bg-slate-200">
          <thead>
            <tr>
              <th>Image</th>
              <th className="pl-40">Name</th>
              <th className="pl-24">Status</th>
            </tr>
          </thead>
          <tbody>
            {contest.map((contests) => (
              <CreateContestss key={contests._id} contests={contests} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateContest;
