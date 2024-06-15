import { useLoaderData } from "react-router-dom";
import Winnings from "./Winnings";
import { MdCelebration } from "react-icons/md";

const WinningContest = () => {
    const winning = useLoaderData()
    //console.log(winning)
    return (
        <div>
            <div className="flex items-center ml-96 my-5 space-x-2">
            <MdCelebration className="text-4xl text-orange-500"></MdCelebration>
            <h1 className="text-4xl font-bold uppercase text-blue-500"> Winners</h1>
            
            </div>
            <div>
            {
                winning.map(winner => <Winnings key={winner._id} winner={winner}></Winnings>)
            }
            </div>
        </div>
    );
};

export default WinningContest;