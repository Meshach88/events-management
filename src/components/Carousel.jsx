// Carousel.js
import Slider from "react-slick";
import { assets } from "../assets";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const news = ["News item 1", "News item 2", "News item 3"];

  return (
    <div className="carousel">
      <Slider {...settings}>
        <img src={assets.slide1} alt="" />
        <img src={assets.slide2} alt="" />
        <img src={assets.slide3} alt="" />
      </Slider>
    </div>
  );
}

export default Carousel;
