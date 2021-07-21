import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import { prettify, delSpaces, setOnlyNums, percentage } from "../../utils"
import { handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handlePercentRange, handleYearsRange, handleSetCasco, handleSetInsurance } from "../../store/action"

const StepTwo = ({ handleSetTotalPrice, handleFirstPayDeal, totalPrice, firstPay, handleMotherCapital, creditType, percentRange, handlePercentRange, yearsRange, handleYearsRange, handleSetInsurance, handleSetCasco }) => {

    const [initilCost, setinitilCost] = useState(2000000)
    const [firstPays, setFirstPay] = useState(initilCost / 100 * 10)
    const [initialCostError, setInitialCostError] = useState(false)

    useEffect(() => {
        setFirstPay(initilCost / 100 * 10)
    }, [initilCost])

    const handleTotalCostDec = (evt) => {
        evt.preventDefault()
        if (creditType === "mortgage") {
            if (+totalPrice >= 1300000 && +totalPrice <= 25000000) {
                setInitialCostError(false)
                setinitilCost(+totalPrice - 100000)
                handleSetTotalPrice(+totalPrice - 100000)
                handleFirstPayDeal((+totalPrice - 100000) / 100 * 10)
                handlePercentRange(percentage(initilCost, firstPays));
            }
            if (+totalPrice < 1200000) {
                setInitialCostError(true)
            }
        } else if (creditType === "autoCredit") {
            if (+totalPrice >= 550000 && +totalPrice <= 5000000) {
                setInitialCostError(false)
                setinitilCost(+totalPrice - 50000)
                handleSetTotalPrice(+totalPrice - 50000)
                handleFirstPayDeal((+totalPrice - 50000) / 100 * 10)
                handlePercentRange(percentage(initilCost, firstPays));
            }
            if (+totalPrice < 500000) {
                setInitialCostError(true)
            }
        }

    }

    const handleTotalCostInc = (evt) => {
        evt.preventDefault()

        if (creditType === "mortgage") {
            if (+totalPrice >= 1200000 && +totalPrice < 25000000) {
                setInitialCostError(false)
                setinitilCost(+totalPrice + 100000)
                handleSetTotalPrice(+totalPrice + 100000)
                handleFirstPayDeal((+totalPrice + 100000) / 100 * 20)
                handlePercentRange(percentage(initilCost, firstPays));
            }
            if (+totalPrice < 1200000) {
                setInitialCostError(true)
            }
        } else if (creditType === "autoCredit") {
            if (+totalPrice >= 500000 && +totalPrice < 5000000) {
                setInitialCostError(false)
                setinitilCost(+totalPrice + 50000)
                handleSetTotalPrice(+totalPrice + 50000)
                handleFirstPayDeal((+totalPrice + 50000) / 100 * 20)
                handlePercentRange(percentage(initilCost, firstPays));
            }
            if (+totalPrice < 500000) {
                setInitialCostError(true)
            }
        }
    }

    const handleInitCost = (evt) => {         // РУЧНОЙ ВВОД ОБЩЕЙ ЦЕНЫ
        setInitialCostError(false)
        handleSetTotalPrice(delSpaces(setOnlyNums(evt.target.value))) // ЗАПИСЫВАЕМ Р-Т В СТОР
        setinitilCost(delSpaces(setOnlyNums(evt.target.value)))  // ЗАПИСЫВАЕМ Р-Т В USESTATE
        setPercentOfTotalPrice(percentage(+totalPrice, +firstPays));

        if (creditType === "mortgage") {
            handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 10)  // ЗАПИСЫВАЕМ В СТОР ПЕРВЫЙ ПЛАТЕЖ
            if (+delSpaces(setOnlyNums(evt.target.value)) > 25000000 || +delSpaces(setOnlyNums(evt.target.value)) < 1200000) {
                setInitialCostError(true)
            }
        }
        if (creditType === "autoCredit") {
            handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 20)  // ЗАПИСЫВАЕМ В СТОР ПЕРВЫЙ ПЛАТЕЖ
            if (+delSpaces(setOnlyNums(evt.target.value)) > 5000000 || +delSpaces(setOnlyNums(evt.target.value)) < 500000) {
                setInitialCostError(true)
            }
        }
    }

    const handleFirstPay = (evt) => {  // РУЧНОЙ ВВОД ПЕРВОГО ПАТЕЖА
        handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)))  // ЗАПИСЫВАЕМ В СТОР Р-Т ВВОДА ПЕРВОЙ ЦЕНЫ
        setFirstPay(delSpaces(setOnlyNums(evt.target.value)))  // ЗАПИСЫВАЕМ Р-Т В USESTATE
        setPercentOfTotalPrice(percentage(+totalPrice, +delSpaces(evt.target.value)));
    }

    const [percentOfTotalPrice, setPercentOfTotalPrice] = useState(0)


    const handlePercent = (evt) => {  // ПОЛЗУНОК ПЕРВОГО ПАТЕЖА
        handlePercentRange(+evt.target.value)
        setPercentOfTotalPrice(+evt.target.value);
        handleFirstPayDeal(totalPrice / 100 * percentOfTotalPrice)
    }

    const [capital, setCapital] = useState(false)

    const handleCapital = () => {
        setCapital(!capital)
        handleMotherCapital(!capital)
    }

    const handleCreditPeriods = (evt) => {
        handleYearsRange(evt.target.value)
    }

    const [casco, setCasco] = useState(false)
    const [insurance, setInsurance] = useState(false)

    const handleCasco = () => {
        setCasco(!casco)
        handleSetCasco(!casco)
    }

    const handleInsurance = () => {
        setInsurance(!insurance)
        handleSetInsurance(!insurance)
    }

    return (
        <>
            <p className="calculator__value">Шаг 2. Введите параметры кредита</p>
            <p className="calculator__value-info">{creditType === "mortgage" ? "Стоимость недвижимости" : "Стоимость автомобиля"}</p>
            <div className={initialCostError ? "calculator__value-wrapper calculator__value-wrapper--error" : "calculator__value-wrapper"}>
                <button className="calulator__value-dec" onClick={handleTotalCostDec} />
                <div className="calulator__value-result-wrapper">
                    <input min={creditType === "autoCredit" && "500000" || creditType === "mortgage" && "1200000"} max={creditType === "autoCredit" && "5000000" || creditType === "mortgage" && "25000000"} type="tel" className="calulator__value-result calulator__value-result--value" value={prettify(totalPrice)} onChange={handleInitCost} />
                </div>
                <span className={!initialCostError ? "calulator__value-no-error" : "calulator__value-no-error calulator__value-error "}>Некорректное значение</span>
                <button className="calulator__value-inc" onClick={handleTotalCostInc} />
            </div>
            <span className="calculator__value-extra">{creditType === "autoCredit" && "От 500 000  до 5 000 000 рублей" || creditType === "mortgage" && "От 1 200 000  до 25 000 000 рублей"}</span>
            <p className="calculator__value-info">Первоначальный взнос</p>
            <div className={+firstPay < (totalPrice / 100) * 10 ? "calculator__value-wrapper calculator__value-wrapper--error-2" : "calculator__value-wrapper calculator__value-wrapper--first-pay"}>
                <div className="calulator__value-result-wrapper">
                    <input step="100000" type="tel" className="calulator__value-result" value={prettify(firstPay)} onChange={handleFirstPay} />
                    <span className={+firstPay < (totalPrice / 100) * 10 ? "calulator__value-no-error calulator__value-error-2" : "calulator__value-no-error "}>Некорректное значение</span>
                </div>
            </div>
            <div className="calulator__value-range-wrapper">
                <input type="range" className="calulator__value-range" min={creditType === "mortgage" && "10" || creditType === "autoCredit" && "20"} max="100" step="5" onChange={handlePercent} value={percentRange} />
                <span className="calculator__value-range-result" >{creditType === "mortgage" && "10%" || creditType === "autoCredit" && "20%"}</span>
            </div>
            <p className="calculator__value-info">Срок кредитования</p>
            <div className="calculator__value-wrapper calculator__value-wrapper--first-pay">
                <input onChange={handleCreditPeriods} type="number" className="calulator__value-result-years" value={yearsRange} />
                <span className="calulator__value-result-year"> лет</span>
            </div>
            <div className="calulator__value-range-wrapper">
                <input value={yearsRange} type="range" className="calulator__value-range" min={creditType === "mortgage" && "5" || creditType === "autoCredit" && "1"} max={creditType === "mortgage" && "30" || creditType === "autoCredit" && "5"} step="1" onChange={handleCreditPeriods} />
                <span className="calculator__value-range-result">{creditType === "mortgage" && "5" || creditType === "autoCredit" && "1"} лет</span>
                <span className="calculator__value-range-result">{creditType === "mortgage" && "30" || creditType === "autoCredit" && "5"} лет</span>
            </div>
            {creditType === "mortgage" && <label htmlFor="" className="calculator__value-mother">
                <input type="checkbox" className="calculator__value-checkbox" onChange={handleCapital} />
                Использовать материнский капитал
            </label>}
            {creditType === "autoCredit" &&
                <>
                    <label htmlFor="" className="calculator__value-mother calculator__value-casco">
                        <input type="checkbox" className="calculator__value-checkbox" onChange={handleCasco} />
                        Оформить КАСКО в нашем банке
                    </label>
                    <label htmlFor="" className="calculator__value-mother calculator__value-insurance">
                        <input type="checkbox" className="calculator__value-checkbox" onChange={handleInsurance} />
                        Оформить Страхование жизни в нашем банке
                    </label>
                </>}

        </>
    )
}

const mapStateToProps = (state) => ({
    totalPrice: state.totalPrice,
    firstPay: state.firstPay,
    creditType: state.creditType,
    percentRange: state.percentRange,
    yearsRange: state.yearsRange,
})

export default connect(mapStateToProps, { handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handlePercentRange, handleYearsRange, handleSetCasco, handleSetInsurance })(StepTwo)