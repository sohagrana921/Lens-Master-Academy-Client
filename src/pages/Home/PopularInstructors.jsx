import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PopularInstructor = () => {
  const course = {
    name: "Tuna Niçoise",

    image: "https://i.ibb.co/54nSnfv/2.jpg",
    category: "popular",
  };
  return (
    <div>
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={course.image} alt="Shoes" />
        </figure>

        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{course.name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
