import {useRef} from "react";
import {connect} from "react-redux";
import {handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit} from "../../store/action";

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

    if (typeCredit === `mortgage`) {
      handleResetInitialValuesMortgage();
    } else if (typeCredit === `autoCredit`) {
      handleResetInitialValuesAutoCredit();
    }
    handleSetCreditType(typeCredit);
    const name = evt.target.textContent;
    titleRef.current.textContent = name;
    select.current.setAttribute(`data-state`, ``);
  };


  return (
    <>

      <div className="__select" data-state="" ref={select}>
        <div className="__select__title" data-default="Option 0" onClick={handleSelect} ref={titleRef}>Выберите цель кредита</div>
        <div className="__select__content">
          <input id="singleSelect1" className="__select__input" type="radio" name="singleSelect" />
          <label htmlFor="singleSelect1" className="__select__label" data-name="mortgage" onClick={handleLabel}>Ипотечное кредитование</label>
          <input id="singleSelect2" className="__select__input" type="radio" name="singleSelect" />
          <label htmlFor="singleSelect2" className="__select__label" onClick={handleLabel} data-name="autoCredit">Автомобильное кредитование</label>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  creditType: state.creditType
});

export default connect(mapStateToProps, {handleSetCreditType, handleResetInitialValuesMortgage, handleResetInitialValuesAutoCredit})(StepOne);
