import {connect} from "react-redux";
import {handleSetLogin} from "../../store/action";
import loginLogo from "../../img/login-logo.png";
import {useForm} from "react-hook-form";
import useLocalStorage from 'react-use-localstorage';
import {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import React from "react";

const Login = ({close, login}) => {

  const {register, handleSubmit} = useForm();
  const [name, setName] = useLocalStorage(`dataLogin`, JSON.stringify(`Initial Value`));

  const handleCloseBtn = () => {
    close();
    handleSetLogin(!login);
  };

  const handleForm = (data) => {
    setName(JSON.stringify(data));
    handleSetLogin(!login);
    close();
  };

  const passRef = useRef();
  const loginRef = useRef();

  const handleHidePassDown = (evt) => {
    evt.preventDefault();
    let input = passRef.current;
    input.type = `text`;
  };

  const handleHidePassUp = (evt) => {
    evt.preventDefault();
    let input = passRef.current;
    input.type = `password`;
  };

  useEffect(() => {
    loginRef.current.focus();
  }, []);


  return (
    <div className="login">
      <div className="login__inner">
        <div className="login__top">
          <img src={loginLogo} alt="logo" className="login-logo" />
          <div className="login__top-inner">
            <h4 className="login__title">ЛИГА Банк</h4>
            <p className="login__text">интернет-банк</p>
          </div>
        </div>
        <div className="login__close" onClick={handleCloseBtn}></div>
        <form className="login__form">
          <label htmlFor="" className="login__label-login">
                        Логин
            <input required type="text" className="login__login" {...register(`login`, {required: true})} ref={loginRef} />
          </label>
          <div data-name={name} className="login__password-wrapper" >
            <label className="login__password-label" >
                            Пароль
              <input required type="password" className="login-password" {...register(`password`, {required: true})} ref={passRef} />
            </label>
            <a className="login__password-hide" onMouseDown={handleHidePassDown} onMouseUp={handleHidePassUp}></a>
            <span className="login__password-text login__password-text--notForMobile">
              <a href="!#" className="login__password-text-link">Забыли пароль?</a>
            </span>
          </div>
          <button className="login__btn" onSubmit={handleSubmit(handleForm)}>Войти</button>
          <span className="login__password-text login__password-text--forMobile">
            <a href="!#" className="login__password-text-link">Забыли пароль?</a>
          </span>
        </form>
      </div>
    </div >
  );
};

Login.propTypes = {
  close: PropTypes.any,
  handleSetLogin: PropTypes.any,
  login: PropTypes.any,
};

const mapStateToProps = (state) => ({
  isPopup: state.isPopup,
  login: state.login
});

export default connect(mapStateToProps, {handleSetLogin})(Login);
