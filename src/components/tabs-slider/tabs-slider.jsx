import CreditTab from "../credit-tab/credit-tab";
import DepositsTab from "../deposits-tab/deposits-tab";
import InsuranceTab from "../insurance-tab/insurance-tab";
import OnlineTab from "../online-tab/online-tab";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "react-slick";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const TabsSlider = ({width}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slider`,
    arrows: false,
    autoplay: false
  };


  const [size, setSize] = useState(`100%`);

  useEffect(() => {
    if (+width < 1024) {
      setSize(`100%`);
    }
    if (+width < 768) {
      setSize(`100%`);
    }
  });

  return (
    <SliderCarousel {...settings}
      style={{position: `relative`, width: size, margin: `0 auto`, marginBottom: `0`}}
    >
      <div>
        <DepositsTab />
      </div>
      <div>
        <CreditTab />
      </div>
      <div>
        <InsuranceTab />
      </div>
      <div>
        <OnlineTab />
      </div>
    </SliderCarousel>
  );
};

TabsSlider.propTypes = {
  width: PropTypes.any,
};


const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps)(TabsSlider);
