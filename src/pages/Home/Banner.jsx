import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img2 from "../../assets/img2.webp";

import img4 from "../../assets/img4.webp";
const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={1500}
      infiniteLoop={true}
    >
      <div>
        <img src={img4} />
      </div>

      <div>
        <img src={img2} />
      </div>
    </Carousel>
  );
};

export default Banner;
