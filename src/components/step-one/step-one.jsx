import { useRef } from "react";
import { connect } from "react-redux";
import { creditTypes } from "../../consts";
import { handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit } from "../../store/action";
import React from "react";

const StepOne = ({ handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit, width }) => {

  const select = useRef();
  const titleRef = useRef();

  const handleSelect = () => {

    if (select.current.getAttribute(`data-state`) === `active`) {
      select.current.setAttribute(`data-state`, ``);
      select.current.style.marginBottom = "69px"
      if (width < 768) {
        select.current.style.marginBottom = "69px"
      }
    } else {
      select.current.setAttribute(`data-state`, `active`);
      select.current.style.marginBottom = "174px"
      if (width < 768) {
        select.current.style.marginBottom = "167px"
      }
    }
  };

  const handleLabel = (evt) => {
    const typeCredit = evt.target.dataset.name;
    select.current.style.marginBottom = "56px"
    if (width < 768) {
      select.current.style.marginBottom = "45px"
    }
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
        <div className="calculator__select-title" data-default="Option 0" onClick={handleSelect} ref={titleRef}>Выберите цель кредита</div>
        <div className="calculator__select-content">
          <input id="singleSelect1" className="calculator__select-input" type="radio" name="singleSelect" />
          <label htmlFor="singleSelect1" className="calculator__select-label" data-name="mortgage" onClick={handleLabel}>Ипотечное кредитование</label>
          <input id="singleSelect2" className="calculator__select-input" type="radio" name="singleSelect" />
          <label htmlFor="singleSelect2" className="calculator__select-label" onClick={handleLabel} data-name="autoCredit">Автомобильное кредитование</label>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps, { handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit })(StepOne);
