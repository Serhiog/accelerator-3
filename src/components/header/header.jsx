import React from "react";
import { connect } from "react-redux";
import { handleSetLogin, handleSetWindowWidth } from "../../store/action"


const Header = ({ handleSetLogin, login, handleSetWindowWidth }) => {


  const handleLogin = (evt) => {
    evt.preventDefault()
    handleSetLogin(!login)
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    handleSetWindowWidth(window.innerWidth)
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    handleSetWindowWidth(window.innerWidth)
  };

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
            <a href="#section1" className="header__link">Услуги</a>
          </li>
          <li className="header__nav-item">
            <a href="#section2" className="header__link">Рассчитать кредит</a>
          </li>
          <li className="header__nav-item">
            <a href="!#" className="header__link">Конвертер валют</a>
          </li>
          <li className="header__nav-item header__nav-item--contacts">
            <a href="#section3" className="header__link">Контакты</a>
          </li>
          <li className="header__nav-item header__nav-item--enter">
            <a href="/login" className="header__link header__link--login" onClick={handleLogin}>Войти в Интернет-банк</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
})


export default connect(mapStateToProps, { handleSetLogin, handleSetWindowWidth })(Header);

