import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        LensMasters | Home
        <title></title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
