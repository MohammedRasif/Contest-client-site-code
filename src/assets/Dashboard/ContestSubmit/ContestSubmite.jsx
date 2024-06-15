import { useActionData, useLoaderData } from "react-router-dom";
import ContestSubmited from "./ContestSubmited";

const ContestSubmite = () => {
    const submit = useLoaderData()
    return (
        <div>
            <h1 className="text-5xl text-blue-500 font-bold text-center my-5">Your submited Contest</h1>
            <div className="m-5 grid md:grid-cols-1 lg:grid-cols-1 g-5">
            {
                submit.map(submied => <ContestSubmited key={submied._id} submied={submied}></ContestSubmited>)
            }
            </div>
        </div>
    );
};

export default ContestSubmite;