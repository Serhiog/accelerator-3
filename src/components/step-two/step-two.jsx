import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import { prettify, delSpaces, setOnlyNums, percentage } from "../../utils"
import { handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital, handleCreditPeriod } from "../../store/action"

const StepTwo = ({ handleSetTotalPrice, handleFirstPayDeal, totalPrice, firstPay, handleCreditPeriod, handleMotherCapital, creditPeriod }) => {

    const [initilCost, setinitilCost] = useState(2000000)
    const [firstPays, setFirstPay] = useState(initilCost / 100 * 10)
    const [initialCostError, setInitialCostError] = useState(false)

    useEffect(() => {
        setFirstPay(initilCost / 100 * 10)
    }, [initilCost])

    const handleTotalCostDec = (evt) => {
        evt.preventDefault()

        if (+totalPrice >= 1300000 && +totalPrice <= 25000000) {
            setInitialCostError(false)
            setinitilCost(+totalPrice - 100000)
            handleSetTotalPrice(+totalPrice - 100000)
            handleFirstPayDeal((+totalPrice - 100000) / 100 * 10)
            setPercentOfTotalPrice(percentage(initilCost, firstPays));
        }
        if (+totalPrice <= 1200000) {
            setInitialCostError(true)
        }
    }

    const handleTotalCostInc = (evt) => {
        evt.preventDefault()

        if (+totalPrice >= 1200000 && +totalPrice <= 24900000) {
            setInitialCostError(false)
            setinitilCost(+totalPrice + 100000)
            handleSetTotalPrice(+totalPrice + 100000)
            handleFirstPayDeal((+totalPrice + 100000) / 100 * 10)
            setPercentOfTotalPrice(percentage(totalPrice, firstPays));
        }
        if (+totalPrice >= 25000000) {
            setInitialCostError(true)
        }
    }

    const handleInitCost = (evt) => {         // РУЧНОЙ ВВОД ОБЩЕЙ ЦЕНЫ
        setInitialCostError(false)
        handleSetTotalPrice(delSpaces(setOnlyNums(evt.target.value))) // ЗАПИСЫВАЕМ Р-Т В СТОР
        setinitilCost(delSpaces(setOnlyNums(evt.target.value)))  // ЗАПИСЫВАЕМ Р-Т В USESTATE
        handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)) / 100 * 10)  // ЗАПИСЫВАЕМ В СТОР ПЕРВЫЙ ПЛАТЕЖ
        setPercentOfTotalPrice(percentage(+totalPrice, +firstPays));
        if (+delSpaces(setOnlyNums(evt.target.value)) > 25000000 || +delSpaces(setOnlyNums(evt.target.value)) < 1200000) {
            setInitialCostError(true)
        }
    }

    const handleFirstPay = (evt) => {  // РУЧНОЙ ВВОД ПЕРВОГО ПАТЕЖА
        handleFirstPayDeal(delSpaces(setOnlyNums(evt.target.value)))  // ЗАПИСЫВАЕМ В СТОР Р-Т ВВОДА ПЕРВОЙ ЦЕНЫ
        setFirstPay(delSpaces(setOnlyNums(evt.target.value)))  // ЗАПИСЫВАЕМ Р-Т В USESTATE
        setPercentOfTotalPrice(percentage(+totalPrice, +delSpaces(evt.target.value)));
    }

    const [percentOfTotalPrice, setPercentOfTotalPrice] = useState(0)


    const handlePercent = (evt) => {  // ПОЛЗУНОК ПЕРВОГО ПАТЕЖА
        setPercentOfTotalPrice(+evt.target.value);
        handleFirstPayDeal(totalPrice / 100 * percentOfTotalPrice)
    }

    const [capital, setCapital] = useState(false)

    const handleCapital = () => {
        setCapital(!capital)
        handleMotherCapital(!capital)
    }

    const [creditPeriods, setCreditPeriod] = useState("5")

    const handleCreditPeriods = (evt) => {
        setCreditPeriod(evt.target.value)
        handleCreditPeriod(evt.target.value)
    }

    return (
        <>
            <p className="calculator__value">Шаг 2. Введите параметры кредита</p>
            <p className="calculator__value-info">Стоимость недвижимости</p>
            <div className={initialCostError ? "calculator__value-wrapper calculator__value-wrapper--error" : "calculator__value-wrapper"}>
                <button className="calulator__value-dec" onClick={handleTotalCostDec} />
                <div className="calulator__value-result-wrapper">
                    <input min="1200000" max="25000000" type="tel" className="calulator__value-result" value={prettify(initilCost)} onChange={handleInitCost} />
                    <span className="calulator__value-result-rub"> рублей</span>
                </div>
                <span className={!initialCostError ? "calulator__value-no-error" : "calulator__value-no-error calulator__value-error "}>Некорректное значение</span>
                <button className="calulator__value-inc" onClick={handleTotalCostInc} />
            </div>
            <span className="calculator__value-extra">От 1 200 000  до 25 000 000 рублей</span>
            <p className="calculator__value-info">Первоначальный взнос</p>
            <div className={+firstPay < (totalPrice / 100) * 10 ? "calculator__value-wrapper calculator__value-wrapper--error-2" : "calculator__value-wrapper calculator__value-wrapper--first-pay"}>
                <div className="calulator__value-result-wrapper">
                    <input step="100000" type="tel" className="calulator__value-result" value={prettify(firstPay)} onChange={handleFirstPay} />
                    <span className={+firstPay < (totalPrice / 100) * 10 ? "calulator__value-no-error calulator__value-error-2" : "calulator__value-no-error "}>Некорректное значение</span>
                    <span className="calulator__value-result-rub"> рублей</span>
                </div>
            </div>
            <div className="calulator__value-range-wrapper">
                <input type="range" className="calulator__value-range" min="5" max="105" step="5" onChange={handlePercent} value={percentOfTotalPrice} />
                <span className="calculator__value-range-result" >10%</span>
            </div>
            <p className="calculator__value-info">Срок кредитования</p>
            <div className="calculator__value-wrapper calculator__value-wrapper--first-pay">
                <input onChange={handleCreditPeriods} type="number" className="calulator__value-result-years" value={creditPeriods} />
                <span className="calulator__value-result-year"> лет</span>
            </div>
            <div className="calulator__value-range-wrapper">
                <input value={creditPeriods} type="range" className="calulator__value-range" min="5" max="30" step="1" onChange={handleCreditPeriods} />
                <span className="calculator__value-range-result">5 лет</span>
                <span className="calculator__value-range-result">30 лет</span>
            </div>
            <label htmlFor="" className="calculator__value-mother">
                <input type="checkbox" className="calculator__value-checkbox" onChange={handleCapital} />
                Использовать материнский капитал
            </label>

        </>
    )
}

const mapStateToProps = (state) => ({
    totalPrice: state.totalPrice,
    firstPay: state.firstPay,
    creditPeriod: state.creditPeriod
})

export default connect(mapStateToProps, { handleCreditPeriod, handleSetTotalPrice, handleFirstPayDeal, handleMotherCapital })(StepTwo)