import { FaRegCalendarAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CreateContestss = ({ contests }) => {
  const { _id, image, name, description } = contests;
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (event) => {
    //console.log("rasif");
    // event.preventDefault();
    const allContestSubmited = {
      name: contests.name,
      description: contests.description,
      category: contests.category,
      price: contests.price,
      image: contests.image,
    };
    const res = await axiosSecure.post("/submited", allContestSubmited);
    console.log("submited saved", res.data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Contest submit successfully",
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handleDelete = (_id) => {
    //console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/contest/${_id}`);
        //console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      

      <div className="overflow-x-auto">
        <table className="table">
         
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    {/* <div className="font-bold">{name}y</div> */}
                  </div>
                </div>
              </td>
              <td className="text-center">
              {name}
              </td>
              {/* <td>Purple</td> */}
              <th className="text-center space-x-8">
                <button onClick={handleSubmit} className="btn btn-ghost btn-xs">Pending</button>
                <Link to={`/dashboard/edit/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>

          </tbody>
         
          
        </table>
      </div>
    </div>
  );
};

export default CreateContestss;
