import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/carts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
        setLoading(false);
      });
  }, [selected, user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>LensMasters | Selected Classes</title>
      </Helmet>

      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full my-8">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {selected.map((select, index) => (
              <tr key={select._id}>
                <th>{index + 1}</th>
                <td>{select.name}</td>
                <td>{select.instructor}</td>
                <td>{select.price}</td>
                <td>
                  <button className="btn btn-success btn-sm">PAY</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(select._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
