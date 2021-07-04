import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-container">
          <img src="img/logo.svg" alt="Лига БАНК" className="header__img" width={28}
            height={25} />
          <p className="header__logo-text">ЛИГА Банк</p>
        </div>
        <ul className="header__nav">
          <li className="header__nav-item">
            <a href="/services" className="header__link">Услуги</a>
          </li>
          <li className="header__nav-item">
            <a href="/credit" className="header__link">Рассчитать кредит</a>
          </li>
          <li className="header__nav-item">
            <a href="/converter" className="header__link">Конвертер валют</a>
          </li>
          <li className="header__nav-item header__nav-item--contacts">
            <a href="/contacts" className="header__link">Контакты</a>
          </li>
          <li className="header__nav-item header__nav-item--enter">
            <a href="/login" className="header__link header__link--login">Войти в Интернет-банк</a>
          </li>
        </ul>
      </div>
    </header>
  );
};


export default Header;

