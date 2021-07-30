import {useRef} from "react";
import {connect} from "react-redux";
import {creditTypes} from "../../consts";
import {handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit} from "../../store/action";
import React from "react";

const StepOne = ({handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit}) => {

  const select = useRef();
  const titleRef = useRef();

  const handleSelect = () => {
    if (select.current.getAttribute(`data-state`) === `active`) {
      select.current.setAttribute(`data-state`, ``);
    } else {
      select.current.setAttribute(`data-state`, `active`);
    }
  };

  const handleLabel = (evt) => {
    const typeCredit = evt.target.dataset.name;

    if (typeCredit === creditTypes.mortgage) {
      handleResetInitialValuesMortgage();
    } else if (typeCredit === creditTypes.auto) {
      handleResetInitialValuesAutoCredit();
    }
    handleSetCreditType(typeCredit);
    const name = evt.target.textContent;
    titleRef.current.textContent = name;
    select.current.setAttribute(`data-state`, ``);
  };


  return (
    <>

      <div className="calculator__select" data-state="" ref={select}>
        <div className="calculator__select__title" data-default="Option 0" onClick={handleSelect} ref={titleRef}>Выберите цель кредита</div>
        <div className="calculator__select__content">
          <input id="singleSelect1" className="calculator__select__input" type="radio" name="singleSelect" />
          <label htmlFor="singleSelect1" className="calculator__select__label" data-name="mortgage" onClick={handleLabel}>Ипотечное кредитование</label>
          <input id="singleSelect2" className="calculator__select__input" type="radio" name="singleSelect" />
          <label htmlFor="singleSelect2" className="calculator__select__label" onClick={handleLabel} data-name="autoCredit">Автомобильное кредитование</label>
        </div>
      </div>
    </>
  );
};

export default connect(null, {handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit})(StepOne);
