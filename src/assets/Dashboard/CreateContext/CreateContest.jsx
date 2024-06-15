import useContests from "../../hooks/useContests";
import CreateContestss from "./CreateContestss";

const CreateContest = () => {
    const [contest] = useContests();
    return (
        <div>
            <div>
      <h1 className="text-5xl font-bold text-center text-blue-500 my-5">Create Contest</h1>
        <div className="overflow-x-auto">
        <table className="table bg-slate-200">
        <thead>
            <tr>
              
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
        </table>
        </div>
      <div       >
        {
            contest.map(contests => <CreateContestss key={contests._id} contests={contests}></CreateContestss>)
        }
      </div>
    </div>
        </div>
    );
};

export default CreateContest;