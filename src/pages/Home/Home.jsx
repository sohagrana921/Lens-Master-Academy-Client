import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructors";

import Faq from "./Faq";
import GrowSkills from "./GrowSkills";

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
      <GrowSkills></GrowSkills>
      <Faq></Faq>
    </div>
  );
};

export default Home;
