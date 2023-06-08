const ClassesCard = ({ course, btnDisable }) => {
  const { name, instructor, seats, price } = course;

  return (
    <div className=" card border bg-base-100 shadow-x">
      <figure>
        <img src={course.photoURL} alt="Shoes" />
      </figure>

      <div className="card-body flex flex-col ">
        <h2 className="card-title">Course Name: {name}</h2>
        <h2 className="card-title">Instructor: {instructor} </h2>

        <h2 className="card-title">Available Seats: {seats} </h2>
        <h2 className="card-title">Price: {price} </h2>

        <div className="card-actions justify-center">
          <button
            disabled={btnDisable}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
