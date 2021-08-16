import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "react-slick";
import ScreenOne from "../screen-one/screen-one";
import ScreenTwo from "../screen-two/screen-two";
import ScreenThree from "../screen-three/screen-three";
import {useState} from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Slider = ({width}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slider`,
    arrows: false,
    autoplay: true
  };

  const [size, setSize] = useState(`100%`);
  const [margin, setMargin] = useState(`59px`);

  useEffect(() => {
    if (+width >= 1024) {
      setSize(`100%`); setMargin(`59px`);
    }
    if (+width < 1024) {
      setSize(`100%`); setMargin(`0`);
    }
    if (+width < 768) {
      setSize(`100%`); setMargin(`0`);
    }
  });

  return (
    <SliderCarousel {...settings}
      style={{position: `relative`, width: size,  margin: `0 auto`, marginBottom: margin}}>
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

Slider.propTypes = {
  width: PropTypes.any,
};


const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps)(Slider);
