import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const InstructorDashBoard = () => {
  return (
    <div>
      <Helmet>
        LensMasters | Instructor Dashboard
        <title></title>
      </Helmet>
      <Link to="/addClass" className="btn btn-outline btn-success">
        Add Class
      </Link>
      <Link className="btn btn-outline btn-warning">My Classes</Link>
    </div>
  );
};

export default InstructorDashBoard;
