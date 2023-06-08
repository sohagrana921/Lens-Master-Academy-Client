import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";

const AdminDashBoard = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, [allUsers]);

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:4000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:4000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>LensMasters | Admin DashBoard</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {allUsers.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.status === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.status === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashBoard;
