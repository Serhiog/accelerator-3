import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "react-slick";
import ScreenOne from "../screen-one/screen-one"
import ScreenTwo from "../screen-two/screen-two"
import ScreenThree from "../screen-three/screen-three"

const Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slider__dots",
    arrows: false,
    autoplay: true
  };

  return (
    <SliderCarousel {...settings} style={{ position: "relative", minWidth: "1370px" }}>
      <div>
        <ScreenOne />
      </div>
      <div>
        <ScreenTwo />
      </div>
      <div>
        <ScreenThree />
      </div>
    </SliderCarousel>
  );
};


export default Slider;

