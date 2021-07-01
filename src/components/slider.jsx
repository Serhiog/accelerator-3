import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";

const Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slider__dots",
    arrows: false
  };

  return (

    <Sliders {...settings} style={{position: "relative"}}>
      <section className="section">
        <div className="section__wrapper">
          <div className="section__inner">
            <div className="section__container">
              <div className="section__left">
                <h1 className="section__title">Лига Банк</h1>
                <p className="section__text">Кредиты на любой случай</p>
                <a className="section__button" href="/credit">Рассчитать кредит</a>
              </div>
              <div className="section__right">
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Sliders>



  );
};


export default Slider;

