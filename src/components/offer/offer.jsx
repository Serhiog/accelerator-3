import { connect } from "react-redux"
import { getTotalCreditValue, getCreditPercent, getMonthPayValue, getMonthSalary } from "../../store/reselect"
import OfferSucces from "../offer-succes/offer-succes"
import OfferError from "../offer-error/offer-error"

const Offer = ({ finalPriceValue, percent, monthPayValue, monthSalary, setFinalStep, finalStep, setCountForm, countForm, creditType }) => {

    if (creditType === "mortgage" && finalPriceValue < 500000 || creditType === "autoCredit" && finalPriceValue < 200000) {
        return (
            <div className="offer">
                <div className="offer__inner">
                    <OfferError creditType={creditType} />
                </div>
            </div>)
    }

    return (
        <div className="offer  offer--succes">
            <div className="offer__inner offer__inner--succes">
                <OfferSucces finalStep={finalStep} setFinalStep={setFinalStep} finalPriceValue={finalPriceValue} percent={percent} monthPayValue={monthPayValue} monthSalary={monthSalary} setCountForm={setCountForm} countForm={countForm} creditType={creditType} />
            </div>
        </div >)


}

const mapStateToProps = (state) => ({
    finalPriceValue: getTotalCreditValue(state),
    percent: getCreditPercent(state),
    monthPayValue: getMonthPayValue(state),
    monthSalary: getMonthSalary(state),
    creditType: state.creditType
})

export default connect(mapStateToProps)(Offer)