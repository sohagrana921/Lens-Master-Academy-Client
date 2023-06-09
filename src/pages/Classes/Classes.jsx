import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  // const [btnDisable, setBtnDisable] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCourses(data);
      });
  }, [courses]);
  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle heading={"Classes"}></SectionTitle>

      <div className="grid grid-cols-3 gap-5 mx-10 md:mx-20 my-20">
        {courses.map((course) => (
          <ClassesCard key={course._id} course={course}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
