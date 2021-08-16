import React from "react";
import {useState} from "react";
import {connect} from "react-redux";
import {handleSetLogin, handleSetWindowWidth, handleBodyOverflow} from "../../store/action";
import PropTypes from "prop-types";

const Header = ({login, handleSetWindowWidth, handleSetLogin, handleBodyOverflow}) => {

  const handleLogin = (evt) => {
    evt.preventDefault();
    handleSetLogin(!login);
  };

  React.useEffect(() => {
    window.addEventListener(`resize`, updateWidthAndHeight);
    handleSetWindowWidth(window.innerWidth);
    // console.log('clientWidth:', document.body.clientWidth);
    // console.log('innerWidth', window.innerWidth);
    return () => window.removeEventListener(`resize`, updateWidthAndHeight);
  }, []);

  const updateWidthAndHeight = () => {
    // console.log('clientWidth:', document.body.clientWidth);
    // console.log('innerWidth', window.innerWidth);
    handleSetWindowWidth(window.innerWidth);
  };

  const [menu, setMenu] = useState(false);

  const handleBurger = () => {
    setMenu(!menu);
    handleBodyOverflow(!menu);
  };
  const handleBurgerClose = () => {
    setMenu(false);
    handleBodyOverflow(false);
  };


  return (
    <header className="header">
      <div className={menu && `header__inner header__inner-active` || `header__inner`}>
        <div className="header__logo-container">
          <button className="header__logo-btn" onClick={handleBurger}></button>
          <img src="img/logo.svg" alt="Лига БАНК" className="header__img" width={28}
            height={25} />
          <p className="header__logo-text">ЛИГА Банк</p>
          <div className="header__nav-item-mobile">
            {!menu ? <a tabIndex="0" href="/login" className="header__link header__link--login-mobile" onClick={handleLogin}>Войти в Интернет-банк</a> : <button className="header__link header__link--close-menu" onClick={handleBurgerClose}></button>}
          </div>
        </div>
        <ul className="header__nav">
          <li className="header__nav-item">
            <a href="#section1" className="header__link" tabIndex="0">Услуги</a>
          </li>
          <li className="header__nav-item">
            <a href="#section2" className="header__link" tabIndex="0">Рассчитать кредит</a>
          </li>
          <li className="header__nav-item">
            <a href="!#" className="header__link" tabIndex="0">Конвертер валют</a>
          </li>
          <li className="header__nav-item header__nav-item--contacts">
            <a href="#section3" className="header__link" tabIndex="0">Контакты</a>
          </li>
          <li className="header__nav-item header__nav-item--enter">
            <a href="/login" className="header__link header__link--login" tabIndex="0" onClick={handleLogin}>Войти в Интернет-банк</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleSetLogin: PropTypes.any,
  login: PropTypes.any,
  handleSetWindowWidth: PropTypes.any,
  handleBodyOverflow: PropTypes.any,
};

const mapStateToProps = (state) => ({
  login: state.login,
});


export default connect(mapStateToProps, {handleSetLogin, handleSetWindowWidth, handleBodyOverflow})(Header);
