// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import UserDataRow from "./UserDataRow";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: users = [],
   
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });
  console.log(users);
  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
       
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Button
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* User data table row */}
                  {users.map((user) => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      refetch={refetch}
                    ></UserDataRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;















// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { FaTrashAlt, FaUser } from "react-icons/fa";
// import Swal from "sweetalert2";

// const ManageUser = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: users = [],refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });

//   const handleDelete= user =>{
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
        
//         axiosSecure.delete(`/users/${user._id}`)
//         .then(res => {
//             //console.log(res)
//             if(res.data.deletedCount > 0 ){
//                 refetch();
//                   Swal.fire({
//                     title: "Deleted!",
//                     text: "Your file has been deleted.",
//                     icon: "success"
//                   });
//             }
//         })
//         }
//       });
//     }


//     const handleMakeAdmin = user =>{
//         axiosSecure.patch(`/users/admin/${user._id}`)
//         .then(res =>{
//             //console.log(res.data)
//             if(res.data.modifiedCount > 0){
//                 refetch();
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "Your work has been saved",
//                     showConfirmButton: false,
//                     timer: 1500
//                   });
//             }
//         })
//     }




//   return (
//     <div>
//       <div className="flex  my-4">
//         <h1 className="text-3xl">All User</h1>
//         <h1 className="text-3xl">Total User:{users.length}</h1>
//       </div>
//       <div>
        
//         <div className="overflow-x-auto">
//           <table className="table table-zebra">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user._id}>
//                   <th>{index + 1}</th>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     {user.role === "admin" ? (
//                       "Admin"
//                     ) : (
//                       <button
//                         onClick={() => handleMakeAdmin(user)}
//                         className="btn  btn-lg"
//                       >
//                         <FaUser className="text-red-600"></FaUser>
//                       </button>
//                     )}
//                   </td>
//                   <td>
//                     <button
//                        onClick={() => handleDelete(user)}
//                       className="btn btn-ghost btn-lg"
//                     >
//                       <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageUser;
