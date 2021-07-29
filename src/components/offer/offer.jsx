import {connect} from "react-redux";
import {getTotalCreditValue, getCreditPercent, getMonthPayValue, getMonthSalary} from "../../store/reselect";
import OfferSucces from "../offer-succes/offer-succes";
import OfferError from "../offer-error/offer-error";
import { creditTypes } from "../../consts";
import PropTypes from "prop-types";

const Offer = ({finalPriceValue, percent, monthPayValue, monthSalary, setFinalStep, finalStep, setCountForm, countForm, creditType}) => {

  if (creditType === creditTypes.mortgage && finalPriceValue < 500000 || creditType === creditTypes.auto && finalPriceValue < 200000) {
    return (
      <div className="offer">
        <div className="offer__inner">
          <OfferError creditType={creditType} />
        </div>
      </div>);
  }

  return (
    <div className="offer  offer--succes">
      <div className="offer__inner offer__inner--succes">
        <OfferSucces finalStep={finalStep} setFinalStep={setFinalStep} finalPriceValue={finalPriceValue} percent={percent} monthPayValue={monthPayValue} monthSalary={monthSalary} setCountForm={setCountForm} countForm={countForm} creditType={creditType} />
      </div>
    </div >);


};

Offer.propTypes = {
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

const mapStateToProps = (state) => ({
  finalPriceValue: getTotalCreditValue(state),
  percent: getCreditPercent(state),
  monthPayValue: getMonthPayValue(state),
  monthSalary: getMonthSalary(state),
  creditType: state.creditType
});

export default connect(mapStateToProps)(Offer);
