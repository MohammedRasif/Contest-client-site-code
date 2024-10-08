import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

const CreateContestss = ({ contests }) => {
  const { _id, image, name, status } = contests;
  const axiosSecure = useAxiosSecure();
  const {theUser} = useUsers()

  // Handle Contest Submission (Approval)
  const handleUpdateStatus = (event) => {
    event.preventDefault();
    const newStatus = "accepted";
    const updateDetails = { status: newStatus };

    fetch(`https://movie-review-server-site.vercel.app/contest/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Contest updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  // Handle Contest Deletion
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/contest/${_id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Contest has been deleted.", "success");
        }
      }
    });
  };

  const isAccepted = status === "accepted";

  // const isAdmin = user && user.role === "admin";

  return (
    <tr>
      {/* Image */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </td>

      {/* Contest name */}
      <td className="text-center">{name}</td>

      {/* Contest status */}
      <td className="text-center">{status}</td>

      {/* Action buttons */}
      <td className="text-center space-x-8">
        {theUser?.role==='admin' && (
          <button
            onClick={handleUpdateStatus}
            className="btn btn-ghost btn-xs"
            disabled={isAccepted}
          >
            {isAccepted ? "Approved" : "Approve"}
          </button>
        )}

        <Link to={`/dashboard/edit/${_id}`}>
          <button className="btn btn-ghost btn-xs" disabled={isAccepted}>
            Edit
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
          disabled={isAccepted}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CreateContestss;
