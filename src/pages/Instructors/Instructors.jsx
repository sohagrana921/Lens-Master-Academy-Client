import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Instructors = () => {
  const course = {
    name: "Tuna Niçoise",

    image: "https://i.ibb.co/54nSnfv/2.jpg",
    category: "popular",
  };

  return (
    <div>
      <SectionTitle heading={"Our's Instructors"}></SectionTitle>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={course.image} alt="Shoes" />
        </figure>

        <div className="card-body flex flex-col ">
          <h2 className="card-title">Name: {course.name}</h2>

          <p>Email:</p>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
