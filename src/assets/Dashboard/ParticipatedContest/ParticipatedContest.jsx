import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAdmin from "../../hooks/useAdmin";

const ParticipatedContest = () => {
  const { user } = useAuth();
  const {isAdmin} = useAdmin()
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email && isAdmin],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
  
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-blue-500 text-white">
              <tr>
                <th>Transaction Id</th>
                <th>email</th>
                <th>Price</th>
                <th>Amount</th>
                <th>deadline</th>

              </tr>
            </thead>
            <tbody>
              {payments.map((payment , index) => <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.transactionId}</td>
                <td>{payment.email}</td>
                <td>{payment.price}tk</td>
                <td>{payment.date}</td>

              </tr> )}
              

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParticipatedContest;

