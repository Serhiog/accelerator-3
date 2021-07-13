import { connect } from "react-redux"
import { getTotalCreditValue, getCreditPercent, getMonthPayValue, getMonthSalary } from "../../store/reselect"
import OfferSucces from "../offer-succes/offer-succes"
import OfferError from "../offer-error/offer-error"

const Offer = ({ finalPriceValue, percent, monthPayValue, monthSalary, setFinalStep, finalStep, setCountForm, countForm }) => {

    return (
        <div className="offer">
            <div className="offer__inner">
                {finalPriceValue < 500000 ? <OfferError /> : <OfferSucces finalStep={finalStep} setFinalStep={setFinalStep} finalPriceValue={finalPriceValue} percent={percent} monthPayValue={monthPayValue} monthSalary={monthSalary} setCountForm={setCountForm} countForm={countForm}/>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    finalPriceValue: getTotalCreditValue(state),
    percent: getCreditPercent(state),
    monthPayValue: getMonthPayValue(state),
    monthSalary: getMonthSalary(state)
})

export default connect(mapStateToProps)(Offer)