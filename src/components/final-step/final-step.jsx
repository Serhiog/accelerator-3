import {useEffect, useRef} from "react";
import {prettify} from "../../utils";
import useLocalStorage from 'react-use-localstorage';
import {useForm} from "react-hook-form";
import {handlePopup} from "../../store/action";
import {connect} from "react-redux";
import {creditTypes} from "../../consts";
import PropTypes from "prop-types";
import React from "react";

const FinalStep = ({countForm, creditType, totalPrice, firstPay, creditPeriod, isPopup, handlePopup}) => {

  const nameRef = useRef();
  const [name, setName] = useLocalStorage(`dataForm`, JSON.stringify(`Initial Value`));
  const {register, handleSubmit} = useForm();

  const handleForm = (data) => {
    setName(JSON.stringify(data));
    handlePopup(!isPopup);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);


  return (

    <div className="final-step">
      <div className="final-step__inner">
        <h4 className="final-step__title">Шаг 3. Оформление заявки</h4>
        <ul className="final-step__list">
          <li className="final-step__item">
            Номер заявки
            <span className="final-step__item-about">
              № {countForm}
            </span>
          </li>
          <li className="final-step__item">
            Цель кредита
            <span className="final-step__item-about">
              {creditType === creditTypes.mortgage ? `Ипотека` : `Автомобильное кредитование`}
            </span>
          </li>
          <li className="final-step__item">
            Стоимость {creditType === creditTypes.mortgage && `недвижимости` || creditType === creditTypes.auto && `автомобиля`}
            <span className="final-step__item-about">
              {prettify(totalPrice)}
            </span>
          </li>
          <li data-name={name} className="final-step__item">
            Первоначальный взнос
            <span className="final-step__item-about">
              {prettify(firstPay)}
            </span>
          </li>
          <li className="final-step__item">
            Срок кредитования
            <span className="final-step__item-about">
              {creditPeriod} лет
            </span>
          </li>
        </ul>
        <form className="final-step__form" onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="name" className="final-step__input-label">
            Имя
            <input id="name" required {...register(`name`, {required: true})} ref={nameRef} type="text" className="final-step__input final-step__name" placeholder="ФИО" />
          </label>
          <label htmlFor="tel" className="final-step__input-label-tel">
            Телефон
            <input htmlFor="tel" required {...register(`tel`, {required: true})} type="number" className="final-step__input final-step__tel" placeholder="Телефон" />
          </label>
          <label htmlFor="email" className="final-step__input-label-email">
            Email
            <input htmlFor="email" required {...register(`email`, {required: true})} type="text" className="final-step__input final-step__email" placeholder="E-mail" />
          </label>
          <button className="final-step__btn" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

FinalStep.propTypes = {
  isPopup: PropTypes.any,
  countForm: PropTypes.any,
  creditType: PropTypes.any,
  totalPrice: PropTypes.any,
  firstPay: PropTypes.any,
  creditPeriod: PropTypes.any,
  handlePopup: PropTypes.any,
};

const mapStateToProps = (state) => ({
  isPopup: state.isPopup
});

export default connect(mapStateToProps, {handlePopup})(FinalStep);
