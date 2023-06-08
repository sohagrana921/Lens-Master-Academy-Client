import { useContext, useEffect, useState } from "react";
import StudentDashBoard from "./StudentDashBoard";
import { AuthContext } from "../../providers/AuthProvider";
import AdminDashBoard from "./AdminDashBoard";

import InstructorDashBoard from "./InstructorDashBoard";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, [allUsers]);
  const currentUserInfo = allUsers.find((user1) => user1.email === user.email);

  return (
    <div>
      {currentUserInfo?.status == "admin" ? (
        <AdminDashBoard></AdminDashBoard>
      ) : (
        ""
      )}

      {currentUserInfo?.status == "student" ? (
        <StudentDashBoard></StudentDashBoard>
      ) : (
        ""
      )}
      {currentUserInfo?.status == "instructor" ? (
        <InstructorDashBoard></InstructorDashBoard>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashBoard;
