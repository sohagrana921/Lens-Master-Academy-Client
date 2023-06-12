import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructors";
import TopPhoto from "./TopPhoto";
import Faq from "./Faq";

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
      <TopPhoto></TopPhoto>
      <Faq></Faq>
    </div>
  );
};

export default Home;
