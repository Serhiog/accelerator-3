
import React from "react";

const ScreenOne = () => {
  return (
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
  );
};

export default ScreenOne;
