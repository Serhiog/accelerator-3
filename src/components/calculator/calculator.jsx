import { connect } from "react-redux";
import StepOne from "../step-one/step-one"
import StepTwo from "../step-two/step-two"
import Offer from "../offer/offer";
import FinalStep from "../final-step/final-step";
import { useEffect, useState } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

const Calculator = ({ creditType, totalPrice, firstPay, creditPeriod, width }) => {

    const [finalStep, setFinalStep] = useState(false)
    const [countForm, setCountForm] = useState(1)

    const [margin, setMargin] = useState("0px")

    useEffect(() => {
        if (width < 1024) {
            if (finalStep) {
                setMargin("38px")
            } else {
                setMargin("0")
            }
        } else if (width > 1023) {
            if (finalStep) {
                setMargin("107px")
            } else {
                setMargin("69px")
            }
        }
    }, [finalStep, width])

    return (
        <ScrollableAnchor id={'section2'}>
            <section className="calculator" style={{ marginBottom: margin }}>
                <div className="calculator__inner">
                    <div className="calculator__left" style={creditType === null && { marginBottom: "0" } || creditType && { marginBottom: "40px" }}>
                        <h3 className="calculator__title">Кредитный калькулятор</h3>
                        <p className="calculator__title-about">Шаг 1. Цель кредита</p>
                        <form className="calculator__form">
                            <StepOne />
                            {creditType && <StepTwo />}
                        </form>
                    </div>
                    <div className="calculator__right">
                        {creditType && <Offer setFinalStep={setFinalStep} finalStep={finalStep} setCountForm={setCountForm} countForm={countForm} />}
                    </div>
                    {finalStep && <FinalStep countForm={countForm} creditType={creditType} totalPrice={totalPrice} firstPay={firstPay} creditPeriod={creditPeriod} />}
                </div>
            </section >
        </ScrollableAnchor >
    )
}

const mapStateToProps = (state) => ({
    creditType: state.creditType,
    totalPrice: state.totalPrice,
    firstPay: state.firstPay,
    creditPeriod: state.yearsRange,
    width: state.width,
})

export default connect(mapStateToProps)(Calculator)