import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassesCard from "./ClassesCard";
import { AuthContext } from "../../providers/AuthProvider";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  const [btnDisable, setBtnDisable] = useState(true);
  const { user } = useContext(AuthContext);
  // if (user) {
  //   setBtnDisable(true);
  // }
  // console.log(user);
  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [courses]);

  return (
    <div>
      <SectionTitle heading={"Classes"}></SectionTitle>

      <div className="grid grid-cols-3 gap-5">
        {courses.map((course) => (
          <ClassesCard
            key={course._id}
            course={course}
            btnDisable={btnDisable}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
