import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import StudentDashBoard from "./StudentDashBoard";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return <div>{user ? <StudentDashBoard></StudentDashBoard> : ""}</div>;
};

export default DashBoard;
