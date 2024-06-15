import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChcekOut from "./ChcekOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
//console.log(stripePromise)
const Payment = () => {
   
    return (
        <div className="pt-32 p-96 mx-20">
            <Elements stripe={stripePromise}>
                <ChcekOut></ChcekOut>
            </Elements>
        </div>
    );
};

export default Payment;