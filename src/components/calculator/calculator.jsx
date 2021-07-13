import { connect } from "react-redux";
import StepOne from "../step-one/step-one"
import StepTwo from "../step-two/step-two"
import Offer from "../offer/offer";
import FinalStep from "../final-step/final-step";
import { useState } from "react";


const Calculator = ({ creditType, totalPrice, firstPay, creditPeriod }) => {

    const [finalStep, setFinalStep] = useState(false)
    const [countForm, setCountForm] = useState(1)

    return (
        <section className="calculator">
            <div className="calculator__inner">
                <div className="calculator__left">
                    <h3 className="calculator__title">Кредитный калькулятор</h3>
                    <form>
                        <StepOne />
                        {creditType && <StepTwo />}
                    </form>
                </div>
                <div className="calculator__right">
                    {creditType && <Offer setFinalStep={setFinalStep} finalStep={finalStep} setCountForm={setCountForm} countForm={countForm}/>}
                </div>
                {finalStep && <FinalStep countForm={countForm} creditType={creditType} totalPrice={totalPrice} firstPay={firstPay} creditPeriod={creditPeriod}/>}
            </div>
        </section >
    )
}

const mapStateToProps = (state) => ({
    creditType: state.creditType,
    totalPrice: state.totalPrice,
    firstPay: state.firstPay,
    creditPeriod: state.creditPeriod
})

export default connect(mapStateToProps)(Calculator)