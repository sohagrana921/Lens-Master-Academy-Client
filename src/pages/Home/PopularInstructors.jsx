import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUsers from "../../hooks/useUsers";

const PopularInstructor = () => {
  const [users] = useUsers();
  const instructors = users.filter((user) => user.status == "instructor");
  return (
    <div>
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>

      <div className="grid my-container grid-cols-3 gap-4 mb-10">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor._id} className="card glass">
            <figure>
              <img
                src="https://i.ibb.co/znvcKH7/329040650-1396461091124897-798799447476968705-n.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold text-center">
                {instructor.name}
              </h2>
              <small>Email : {instructor.email}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
