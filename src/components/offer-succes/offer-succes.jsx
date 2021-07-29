import { creditTypes } from "../../consts";
import { prettify } from "../../utils";
import PropTypes from "prop-types";

const OfferSucces = ({ finalPriceValue, percent, monthPayValue, monthSalary, setFinalStep, finalStep, setCountForm, countForm, creditType }) => {

  const handleSubmitBtn = () => {
    setFinalStep(!finalStep);
    finalStep && setCountForm(countForm + 1);
  };

  return (
    <>
      <h4 className="offer__title">Наше предложение</h4>
      <ul className="offer__list">
        <li className="offer__item offer__item--1">
          <span className="offer__item-numer">{prettify(finalPriceValue)}</span>
          <span className="offer__item-about">Сумма {creditType === creditTypes.mortgage && `ипотеки` || creditType === creditTypes.auto && `автокредита`}</span>
        </li>
        <li className="offer__item offer__item--2">
          <span className="offer__item-numer">
            {creditType === creditTypes.mortgage && percent + `0 %` || creditType === creditTypes.auto && percent + `%`}
          </span>
          <span className="offer__item-about">Процентная ставка</span>
        </li>
        <li className="offer__item offer__item--3">
          <span className="offer__item-numer">
            {monthPayValue}
          </span>
          <span className="offer__item-about">Ежемесячный платеж</span>
        </li>
        <li className="offer__item offer__item--4">
          <span className="offer__item-numer">
            {monthSalary}
          </span>
          <span className="offer__item-about">Необходимый доход</span>
        </li>
      </ul>
      <button className="offer__btn" onClick={handleSubmitBtn}>Оформить заявку</button>
    </>
  );
};

OfferSucces.propTypes = {
  finalPriceValue: PropTypes.any,
  percent: PropTypes.any,
  monthPayValue: PropTypes.any,
  monthSalary: PropTypes.any,
  setFinalStep: PropTypes.any,
  finalStep: PropTypes.any,
  setCountForm: PropTypes.any,
  countForm: PropTypes.any,
  creditType: PropTypes.any,
};

export default OfferSucces;
