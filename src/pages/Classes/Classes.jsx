import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Classes = () => {
  const course = {
    name: "Tuna Niçoise",

    image: "https://i.ibb.co/54nSnfv/2.jpg",
    category: "popular",
  };
  return (
    <div>
      <SectionTitle heading={"Classes"}></SectionTitle>

      <div className="card w-96 bg-base-100 shadow-x">
        <figure>
          <img src={course.image} alt="Shoes" />
        </figure>

        <div className="card-body flex flex-col ">
          <h2 className="card-title">Course Name: {course.name}</h2>
          <h2 className="card-title">Instructor name: </h2>
          <div className="flex justify-between mr-4">
            <h2 className="card-title">Available seats: </h2>
            <h2 className="card-title">Price: </h2>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
