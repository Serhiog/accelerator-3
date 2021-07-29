import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { prettify, delSpaces, setOnlyNums, percentage, prettifyYears } from "../../utils";
import { handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handlePercentRange, handleYearsRange, handleSetCasco, handleSetInsurance } from "../../store/action";
import { creditTypes } from "../../consts";
import PropTypes from "prop-types";

const StepTwo = ({ handleSetTotalPrice, handleFirstPayDeal, totalPrice, firstPay, handleMotherCapital, creditType, percentRange, handlePercentRange, yearsRange, handleYearsRange, handleSetInsurance, handleSetCasco }) => {


  const [initilCost, setinitilCost] = useState(2000000);
  const [firstPays, setFirstPay] = useState(initilCost / 100 * 10);
  const [initialCostError, setInitialCostError] = useState(false);

  useEffect(() => {
    setFirstPay(initilCost / 100 * 10);
  }, [initilCost]);

  const handleTotalCostDec = (evt) => {
    evt.preventDefault();
    if (creditType === creditTypes.mortgage) {
      if (+totalPrice >= 1300000 && +totalPrice <= 25000000) {
        setInitialCostError(false);
        setinitilCost(+totalPrice - 100000);
        handleSetTotalPrice(+totalPrice - 100000);
        handleFirstPayDeal((+totalPrice - 100000) / 100 * 10);
        handlePercentRange(percentage(initilCost, firstPays));
      }
      if (+totalPrice < 1200000) {
        setInitialCostError(true);
      }
    } else if (creditType === creditTypes.auto) {
      if (+totalPrice >= 550000 && +totalPrice <= 5000000) {
        setInitialCostError(false);
        setinitilCost(+totalPrice - 50000);
        handleSetTotalPrice(+totalPrice - 50000);
        handleFirstPayDeal((+totalPrice - 50000) / 100 * 10);
        handlePercentRange(percentage(initilCost, firstPays));
      }
      if (+totalPrice < 500000) {
        setInitialCostError(true);
      }
    }

  };

  const handleTotalCostInc = (evt) => {
    evt.preventDefault();

    if (creditType === creditTypes.mortgage) {
      if (+totalPrice >= 1200000 && +totalPrice < 25000000) {
        setInitialCostError(false);
        setinitilCost(+totalPrice + 100000);
        handleSetTotalPrice(+totalPrice + 100000);
        handleFirstPayDeal((+totalPrice + 100000) / 100 * 10);
        handlePercentRange(percentage(initilCost, firstPays));
      }
      if (+totalPrice < 1200000) {
        setInitialCostError(true);
      }
    } else if (creditType === creditTypes.auto) {
      if (+totalPrice >= 500000 && +totalPrice < 5000000) {
        setInitialCostError(false);
        setinitilCost(+totalPrice + 50000);
        handleSetTotalPrice(+totalPrice + 50000);
        handleFirstPayDeal((+totalPrice + 50000) / 100 * 20);
        handlePercentRange(percentage(initilCost, firstPays));
      }
      if (+totalPrice < 500000) {
        setInitialCostError(true);
      }
    }
  };

  const handleInitCost = (evt) => { // РУЧНОЙ ВВОД ОБЩЕЙ ЦЕНЫ
    setInitialCostError(false);
    handleSetTotalPrice(delSpaces(setOnlyNums(evt.target.value))); // ЗАПИСЫВАЕМ Р-Т В СТОР
    setinitilCost(delSpaces(setOnlyNums(evt.target.value))); // ЗАПИСЫВАЕМ Р-Т В USESTATE
    setPercentOfTotalPrice(percentage(+totalPrice, +firstPays));

    if (creditType === creditTypes.mortgage) {
      handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 10); // ЗАПИСЫВАЕМ В СТОР ПЕРВЫЙ ПЛАТЕЖ
      if (+delSpaces(setOnlyNums(evt.target.value)) > 25000000 || +delSpaces(setOnlyNums(evt.target.value)) < 1200000) {
        setInitialCostError(true);
      }
    }
    if (creditType === creditTypes.auto) {
      handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 20); // ЗАПИСЫВАЕМ В СТОР ПЕРВЫЙ ПЛАТЕЖ
      if (+delSpaces(setOnlyNums(evt.target.value)) > 5000000 || +delSpaces(setOnlyNums(evt.target.value)) < 500000) {
        setInitialCostError(true);
      }
    }
  };

  const handleFirstPay = (evt) => { // РУЧНОЙ ВВОД ПЕРВОГО ПАТЕЖА
    handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value))); // ЗАПИСЫВАЕМ В СТОР Р-Т ВВОДА ПЕРВОЙ ЦЕНЫ
    setFirstPay(delSpaces(setOnlyNums(evt.target.value))); // ЗАПИСЫВАЕМ Р-Т В USESTATE
    setPercentOfTotalPrice(percentage(+totalPrice, +delSpaces(evt.target.value)));
  };

  const [percentOfTotalPrice, setPercentOfTotalPrice] = useState(0);


  const handlePercent = (evt) => { // ПОЛЗУНОК ПЕРВОГО ПАТЕЖА
    handlePercentRange(+evt.target.value);
    setPercentOfTotalPrice(+evt.target.value);
    handleFirstPayDeal(totalPrice / 100 * percentOfTotalPrice);
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

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  const [focusedPay, setFocusedPay] = useState(false)
  const onFocusPay = () => setFocusedPay(true)
  const onBlurPay = () => setFocusedPay(false)

  const [focusedYear, setFocusedYear] = useState(false)
  const onFocusYear = () => setFocusedYear(true)
  const onBlurYear = () => setFocusedYear(false)

  return (
    <>
      <p className="calculator__value">Шаг 2. Введите параметры кредита</p>
      <p className="calculator__value-info">{creditType === creditTypes.mortgage ? `Стоимость недвижимости` : `Стоимость автомобиля`}</p>
      <div className={initialCostError ? `calculator__value-wrapper calculator__value-wrapper--error` : `calculator__value-wrapper`}>
        <button className="calculator__value-dec" onClick={handleTotalCostDec} />
        <div className="calculator__value-result-wrapper">
          <label htmlFor="total" className="calculator__value-result--value-label">
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
            <input id="pay" step="100000" type="tel" className="calculator__value-result" value={!focusedPay && prettify(firstPay) || focusedPay && firstPay} onChange={handleFirstPay} onFocus={onFocusPay} onBlur={onBlurPay} />
          </label>
          <span className={+firstPay < (totalPrice / 100) * 10 ? `calculator__value-no-error calculator__value-error-2` : `calculator__value-no-error `}>Некорректное значение</span>
        </div>
      </div>
      <div className="calculator__value-range-wrapper">
        <label htmlFor="payRange" className="calculator__value-result--value-label-pay-range">
          <input id="payRange" type="range" className="calculator__value-range" min={creditType === creditTypes.mortgage && `10` || creditType === creditTypes.auto && `20`} max="100" step="5" onChange={handlePercent} value={percentRange} />
        </label>
        <span className="calculator__value-range-result" >{creditType === creditTypes.mortgage && `10%` || creditType === creditTypes.auto && `20%`}</span>
      </div>
      <p className="calculator__value-info">Срок кредитования</p>
      <div className="calculator__value-wrapper calculator__value-wrapper--first-pay">
        <label htmlFor="time" className="calculator__value-result--value-label-time">
          <input id="time" onChange={handleCreditPeriods} type="tel" className="calculator__value-result-years" value={!focusedYear && prettifyYears(yearsRange) || focusedYear && yearsRange} onFocus={onFocusYear} onBlur={onBlurYear} />
        </label>
      </div>
      <div className="calculator__value-range-wrapper">
        <label htmlFor="time" className="calculator__value-result--value-label-time-range">
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
  handleSetTotalPrice: PropTypes.any,
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
