import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <div className="my-container">
      <SectionTitle heading={"FAQ"}></SectionTitle>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;