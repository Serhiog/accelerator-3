import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { prettify, delSpaces, setOnlyNums, percentage, prettifyYears } from "../../utils";
import { handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handlePercentRange, handleYearsRange, handleSetCasco, handleSetInsurance } from "../../store/action";
import { creditTypes } from "../../consts";
import PropTypes from "prop-types";
import React from "react";

const StepTwo = ({ totalPrice, firstPay, creditType, percentRange, yearsRange, handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handlePercentRange, handleYearsRange, handleSetCasco, handleSetInsurance }) => {

  useEffect(() => {
    if (creditType === creditTypes.auto) {
      handleFirstPayDeal(400000)
    }
  }, [creditType])

  const [initialCostError, setInitialCostError] = useState(false);

  const handleTotalCostDec = (evt) => {
    evt.preventDefault();
    handlePercentRange(0)
    if (creditType === creditTypes.mortgage) {
      if (+totalPrice >= 1300000 && +totalPrice <= 25000000) {
        setInitialCostError(false);
        handleSetTotalPrice(+totalPrice - 100000);
        handleFirstPayDeal((+totalPrice - 100000) / 100 * 10);
      }
      if (+totalPrice < 1200000) {
        setInitialCostError(true);
      }
    } else if (creditType === creditTypes.auto) {
      if (+totalPrice >= 550000 && +totalPrice <= 5000000) {
        setInitialCostError(false);
        handleSetTotalPrice(+totalPrice - 50000);
        handleFirstPayDeal((+totalPrice - 50000) / 100 * 20);
      }
      if (+totalPrice < 500000) {
        setInitialCostError(true);
      }
    }

  };

  const handleTotalCostInc = (evt) => {
    evt.preventDefault();
    handlePercentRange(0)
    if (creditType === creditTypes.mortgage) {
      if (+totalPrice >= 1200000 && +totalPrice < 25000000) {
        setInitialCostError(false);
        handleSetTotalPrice(+totalPrice + 100000);
        handleFirstPayDeal((+totalPrice + 100000) / 100 * 10);
      }
      if (+totalPrice < 1200000) {
        setInitialCostError(true);
      }
    } else if (creditType === creditTypes.auto) {
      if (+totalPrice >= 500000 && +totalPrice < 5000000) {
        setInitialCostError(false);
        handleSetTotalPrice(+totalPrice + 50000);
        handleFirstPayDeal((+totalPrice + 50000) / 100 * 20);
      }
      if (+totalPrice < 500000) {
        setInitialCostError(true);
      }
    }
  };

  const handleInitCost = (evt) => {
    setInitialCostError(false);
    handlePercentRange(0)
    handleSetTotalPrice(delSpaces(setOnlyNums(evt.target.value)));

    if (creditType === creditTypes.mortgage) {
      handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 10);
      if (+delSpaces(setOnlyNums(evt.target.value)) > 25000000 || +delSpaces(setOnlyNums(evt.target.value)) < 1200000) {
        setInitialCostError(true);
      }
    }
    if (creditType === creditTypes.auto) {
      handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 20);
      if (+delSpaces(setOnlyNums(evt.target.value)) > 5000000 || +delSpaces(setOnlyNums(evt.target.value)) < 500000) {
        setInitialCostError(true);
      }
    }
  };

  const handleFirstPay = (evt) => {
    handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)));
    handlePercentRange(percentage(+totalPrice, +delSpaces(evt.target.value)));
  };

  const handlePercent = (evt) => {
    handlePercentRange(+evt.target.value);
    handleFirstPayDeal(totalPrice / 100 * +evt.target.value);
  };

  const [capital, setCapital] = useState(false);

  const handleCapital = () => {
    setCapital(!capital);
    handleMotherCapital(!capital);
  };

  const handleCreditPeriods = (evt) => {
    handleYearsRange(evt.target.value);
  };

  const [casco, setCasco] = useState(false);
  const [insurance, setInsurance] = useState(false);

  const handleCasco = () => {
    setCasco(!casco);
    handleSetCasco(!casco);
  };

  const handleInsurance = () => {
    setInsurance(!insurance);
    handleSetInsurance(!insurance);
  };

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);

  const onBlur = () => {
    setFocused(false)

    if (creditType === creditTypes.mortgage) {
      if (totalPrice < 1200000) {
        initialCostError; handleSetTotalPrice(1200000); setInitialCostError(false); handleFirstPayDeal(120000);
      }
      if (totalPrice > 25000000) {
        setFocused(false)
        initialCostError; handleSetTotalPrice(25000000); setInitialCostError(false); handleFirstPayDeal(2500000);
      }
    }
    if (creditType === creditTypes.auto) {
      if (totalPrice < 500000) {
        initialCostError; handleSetTotalPrice(500000); setInitialCostError(false); handleFirstPayDeal(100000);
      }
      if (totalPrice > 5000000) {
        setFocused(false)
        initialCostError; handleSetTotalPrice(5000000); setInitialCostError(false); handleFirstPayDeal(1000000);
      }
    }
  };

  const [focusedPay, setFocusedPay] = useState(false);
  const onFocusPay = () => setFocusedPay(true);

  const onBlurPay = () => {
    setFocusedPay(false)
    if (creditType === creditTypes.mortgage) {
      if (firstPay < totalPrice * 0.1) {
        handleFirstPayDeal(totalPrice * 0.1)
      }
    }
    if (creditType === creditTypes.auto) {
      if (firstPay < totalPrice * 0.2) {
        handleFirstPayDeal(totalPrice * 0.2)
      }
    }
  };

  const [focusedYear, setFocusedYear] = useState(false);
  const onFocusYear = () => setFocusedYear(true);

  const onBlurYear = () => {
    setFocusedYear(false)
    if (creditType === creditTypes.mortgage) {
      if (yearsRange < 5) {
        handleYearsRange(5);
      }
      if (yearsRange > 30) {
        handleYearsRange(30);
      }
    }
    if (creditType === creditTypes.auto) {
      if (yearsRange < 1) {
        handleYearsRange(1);
      }
      if (yearsRange > 5) {
        handleYearsRange(5);
      }
    }
  };

  return (
    <>
      <p className="calculator__value">Шаг 2. Введите параметры кредита</p>
      <p className="calculator__value-info">{creditType === creditTypes.mortgage ? `Стоимость недвижимости` : `Стоимость автомобиля`}</p>
      <div className={initialCostError ? `calculator__value-wrapper calculator__value-wrapper--error` : `calculator__value-wrapper`}>
        <button className="calculator__value-dec" onClick={handleTotalCostDec} />
        <div className="calculator__value-result-wrapper">
          <label htmlFor="total" className="calculator__value-result--value-label">
            Общая стоимость
            <input id="total" min={creditType === creditTypes.auto && `500000` || creditType === creditTypes.mortgage && `1200000`} max={creditType === creditTypes.auto && `5000000` || creditType === creditTypes.mortgage && `25000000`} type="tel" className="calculator__value-result calculator__value-result--value" value={!focused && prettify(totalPrice) || focused && totalPrice} onChange={handleInitCost} onFocus={onFocus} onBlur={onBlur} />
          </label>
        </div>
        <span className={!initialCostError ? `calculator__value-no-error` : `calculator__value-no-error calculator__value-error `}>Некорректное значение</span>
        <button className="calculator__value-inc" onClick={handleTotalCostInc} />
      </div>
      <span className="calculator__value-extra">{creditType === creditTypes.auto && `От 500 000  до 5 000 000 рублей` || creditType === creditTypes.mortgage && `От 1 200 000  до 25 000 000 рублей`}</span>
      <p className="calculator__value-info">Первоначальный взнос</p>
      <div className={+firstPay < (totalPrice / 100) * 10 ? `calculator__value-wrapper calculator__value-wrapper--error-2` : `calculator__value-wrapper calculator__value-wrapper--first-pay`}>
        <div className="calculator__value-result-wrapper">
          <label htmlFor="pay" className="calculator__value-result--value-label-pay">
            Первый платеж
            <input id="pay" step="100000" type="tel" className="calculator__value-result" value={!focusedPay && prettify(firstPay) || focusedPay && firstPay} onChange={handleFirstPay} onFocus={onFocusPay} onBlur={onBlurPay} />
          </label>
          <span className={+firstPay < (totalPrice / 100) * 10 ? `calculator__value-no-error calculator__value-error-2` : `calculator__value-no-error `}>Некорректное значение</span>
        </div>
      </div>
      <div className="calculator__value-range-wrapper">
        <label htmlFor="payRange" className="calculator__value-result--value-label-pay-range">
          Выбор срока кредитования
          <input id="payRange" type="range" className="calculator__value-range" min={creditType === creditTypes.mortgage && `10` || creditType === creditTypes.auto && `20`} max="100" step="5" onChange={handlePercent} value={percentRange} />
        </label>
        <span className="calculator__value-range-result" >{percentRange + "%"}</span>
      </div>
      <p className="calculator__value-info">Срок кредитования</p>
      <div className="calculator__value-wrapper calculator__value-wrapper--first-pay">
        <label htmlFor="time" className="calculator__value-result--value-label-time">
          Выбор срока кредитования
          <input id="time" onChange={handleCreditPeriods} type="tel" className="calculator__value-result-years" value={!focusedYear && yearsRange + " " + prettifyYears(yearsRange) || focusedYear && yearsRange} onFocus={onFocusYear} onBlur={onBlurYear} />
        </label>
      </div>
      <div className="calculator__value-range-wrapper">
        <label htmlFor="time" className="calculator__value-result--value-label-time-range">
          Выбор срока кредитования
          <input value={yearsRange} type="range" className="calculator__value-range" min={creditType === creditTypes.mortgage && `5` || creditType === creditTypes.auto && `1`} max={creditType === creditTypes.mortgage && `30` || creditType === creditTypes.auto && `5`} step="1" onChange={handleCreditPeriods} />
        </label>
        <span className="calculator__value-range-result">{creditType === creditTypes.mortgage && `5` || creditType === creditTypes.auto && `1`} лет</span>
        <span className="calculator__value-range-result">{creditType === creditTypes.mortgage && `30` || creditType === creditTypes.auto && `5`} лет</span>
      </div>
      {creditType === creditTypes.mortgage && <label htmlFor="check1" className="calculator__value-mother">
        <input id="check1" type="checkbox" className="calculator__value-checkbox" onChange={handleCapital} />
        Использовать материнский капитал
      </label>}
      {creditType === creditTypes.auto &&
        <>
          <label htmlFor="check2" className="calculator__value-mother calculator__value-casco">
            <input id="check2" type="checkbox" className="calculator__value-checkbox" onChange={handleCasco} />
            Оформить КАСКО в нашем банке
          </label>
          <label htmlFor="check3" className="calculator__value-mother calculator__value-insurance">
            <input id="check3" type="checkbox" className="calculator__value-checkbox" onChange={handleInsurance} />
            Оформить Страхование жизни в нашем банке
          </label>
        </>}

    </>
  );
};

StepTwo.propTypes = {
  creditType: PropTypes.any,
  handleFirstPayDeal: PropTypes.any,
  totalPrice: PropTypes.any,
  firstPay: PropTypes.any,
  handleMotherCapital: PropTypes.any,
  percentRange: PropTypes.any,
  handlePercentRange: PropTypes.any,
  yearsRange: PropTypes.any,
  handleYearsRange: PropTypes.any,
  handleSetInsurance: PropTypes.any,
  handleSetCasco: PropTypes.any,
};


const mapStateToProps = (state) => ({
  totalPrice: state.totalPrice,
  firstPay: state.firstPay,
  creditType: state.creditType,
  percentRange: state.percentRange,
  yearsRange: state.yearsRange,
});

export default connect(mapStateToProps, { handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handlePercentRange, handleYearsRange, handleSetCasco, handleSetInsurance })(StepTwo);
