const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h2
        style={{ borderRadius: "0 30px 0px 30px" }}
        className="text-3xl text-center font-bold bg-orange-500 text-white py-4 md:w-1/3 mx-auto my-20"
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;