import useAuth from "../../hooks/useAuth";

const ContestSubmited = ({ submied }) => {
    const {user} = useAuth()
    const {image,name,description} = submied;
  return (
    <div>
      <img src={image} className=" h-96 w-[650px] " alt="" />
      <h1 className="text-4xl font-bold">{name}</h1>
      <div>
        <h1 className="text-xl font-bold my-1">email: <span className="text-blue-500">{user?.email}</span> </h1>
        <h1></h1>
      </div>
      <p className=" my-2 mr-24">{description}</p>
      

      
    </div>
  );
};

export default ContestSubmited;
