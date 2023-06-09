import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUsers from "../../hooks/useUsers";

const Instructors = () => {
  const [users, loading] = useUsers();

  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }
  const instructors = users.filter((user) => user.status == "instructor");

  return (
    <div>
      <SectionTitle heading={"Our's Instructors"}></SectionTitle>
      <div className="grid grid-cols-3 gap-5 my-20 mx-10 md:mx-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="w-full" src={instructor.photo} alt="" />
            </figure>

            <div className="card-body flex flex-col ">
              <h2 className="card-title">Name: {instructor.name}</h2>

              <p>
                <span className="font-bold">Email :</span> {instructor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
