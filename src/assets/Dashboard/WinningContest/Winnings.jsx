
import { MdCelebration } from "react-icons/md";


const Winnings = ({ winner }) => {
  const { ContestName,winners,  Image, ContestDescription } =
    winner;
  return (
    <div className="flex ">
        <div className="w-1/2 my-4">
        <img src={Image} className=" h-96 w-[570px] " alt="" />

        </div>
      <div className="w-1/2 my-5">
      <div className="flex items-center space-x-2">
      <MdCelebration className="text-4xl text-orange-500"></MdCelebration>
      <h1 className="text-4xl font-bold uppercase text-blue-500"> Winning Category:{winners} </h1>
      </div>
      <h1 className="text-4xl font-bold">{ContestName}</h1>
      <p className=" my-2 mr-24">{ContestDescription}</p>
      <div>
        
      </div>
      </div>
      
    
      
    </div>
  );
};

export default Winnings;
