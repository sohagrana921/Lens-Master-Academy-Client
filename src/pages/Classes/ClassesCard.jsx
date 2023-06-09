import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

const ClassesCard = ({ course }) => {
  const { _id, name, instructor, seats, price, photoURL } = course;
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const navigate = useNavigate();
  const currentUser = users.find((current) => current.email == user.email);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        courseId: _id,
        name,
        photoURL,
        price,
        email: user.email,
        instructor,
      };
      fetch("http://localhost:4000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enrol the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className=" card border bg-base-100 shadow-x">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>

      <div className="card-body flex flex-col ">
        <h2 className="card-title">Course Name: {name}</h2>
        <h2 className="card-title">Instructor: {instructor} </h2>

        <h2 className="card-title">Available Seats: {seats} </h2>
        <h2 className="card-title">Price: ${price} </h2>

        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            disabled={
              seats == "0" ||
              currentUser?.status == "admin" ||
              currentUser?.status == "instructor"
                ? true
                : false
            }
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
