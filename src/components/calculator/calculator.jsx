
import { connect } from "react-redux";
import StepOne from "../step-one/step-one"
import StepTwo from "../step-two/step-two"

const Calculator = ({ creditType }) => {


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
                <div className="calculator__right"></div>
            </div>
        </section >
    )
}

const mapStateToProps = (state) => ({
    creditType: state.creditType
})

export default connect(mapStateToProps)(Calculator)