import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/images.jpg";
const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={1500}
      infiniteLoop={true}
    >
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img1} />
      </div>
    </Carousel>
  );
};

export default Banner;
