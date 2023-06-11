import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [courses, setCourses] = useState([]);
  const [feedbackId, setFeedbackId] = useState("");
  const feedbackInputRef = useRef(null);
  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [courses]);

  const handleMakeApproved = (course) => {
    fetch(`http://localhost:4000/courses/approve/${course._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${course.name} is Approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeDeny = (course) => {
    fetch(`http://localhost:4000/courses/deny/${course._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${course.name} is Denyed!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleFeedbackSubmit = (id) => {
    const feedbackValue = feedbackInputRef.current.value;
    const data = {
      feedback: feedbackValue,
    };
    console.log(data, id);
    setFeedbackId(id);
    fetch(`http://localhost:4000/courses/feedback/${feedbackId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Send Feedback successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    // Reset the form if needed
    feedbackInputRef.current.value = "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Instructor Name & Email</th>

            <th>Seats</th>
            <th>Status</th>
            <th>Approve</th>
            <th>Deny</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={course.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{course.name}</td>
              <td>
                {course.instructor} <br /> Email:
                {course.email}
              </td>

              <td>{course.seats}</td>
              <td>{course.status}</td>
              <td>
                <button
                  onClick={() => handleMakeApproved(course)}
                  className="btn btn-xs btn-success"
                  disabled={
                    course.status === "Approved" || course.status === "Deny"
                      ? true
                      : false
                  }
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleMakeDeny(course)}
                  className="btn btn-xs btn-warning"
                  disabled={
                    course.status === "Approved" || course.status === "Deny"
                      ? true
                      : false
                  }
                >
                  Deny
                </button>
              </td>

              <td>
                <button
                  onClick={() => {
                    window.my_modal_3.showModal();
                    handleFeedbackSubmit(course._id);
                  }}
                  className="btn btn-xs btn-primary"
                >
                  FeedBack
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-2">ADD FEEDBACK!</h3>
          <input
            type="text"
            name="feedback"
            ref={feedbackInputRef}
            className="textarea textarea-bordered w-full h-24"
          />

          <input
            type="submit"
            onClick={handleFeedbackSubmit}
            className="btn btn-success mt-3"
            value="Send"
          />
        </form>
      </dialog>
    </div>
  );
};

export default ManageClass;
