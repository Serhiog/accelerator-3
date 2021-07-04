import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import Slider1 from "../slider1/slider1"
import Slider2 from "../slider2/slider2"
import Slider3 from "../slider3/slider3"

const Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slider__dots",
    arrows: false,
    //autoplay: true
  };

  return (
    <Sliders {...settings} style={{ position: "relative" }}>
      <div>
        <Slider1 />
      </div>
      <div>
        <Slider2 />
      </div>
      <div>
        <Slider3 />
      </div>
    </Sliders>
  );
};


export default Slider;

