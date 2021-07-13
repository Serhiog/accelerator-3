import { useEffect } from "react"
import { useRef } from "react"
import { prettify } from "../../utils"

const FinalStep = ({ countForm, creditType, totalPrice, firstPay, creditPeriod }) => {

    const nameRef = useRef()

    useEffect(() => { nameRef.current.focus() }, [])


    return (
        <div className="final-step">
            <div className="final-step__inner">
                <h4 className="final-step__title">Шаг 3. Оформление заявки</h4>
                <ul className="final-step__list">
                    <li className="final-step__item">
                        Номер заявки
                        <span className="final-step__item-about">
                            № {countForm}
                        </span>
                    </li>
                    <li className="final-step__item">
                        Цель кредита
                        <span className="final-step__item-about">
                            {creditType === "mortgage" ? "Ипотека" : "Автомобильное кредитование"}
                        </span>
                    </li>
                    <li className="final-step__item">
                        Стоимость недвижимости
                        <span className="final-step__item-about">
                            {prettify(totalPrice)} рублей
                        </span>
                    </li>
                    <li className="final-step__item">
                        Первоначальный взнос
                        <span className="final-step__item-about">
                            {prettify(firstPay)} рублей
                        </span>
                    </li>
                    <li className="final-step__item">
                        Срок кредитования
                        <span className="final-step__item-about">
                            {creditPeriod} лет
                        </span>
                    </li>
                </ul>
                <form className="final-step__form">
                    <input required ref={nameRef} type="text" className="final-step__input final-step__name" placeholder="ФИО" />
                    <input required type="text" className="final-step__input final-step__tel" placeholder="Телефон" />
                    <input required type="text" className="final-step__input final-step__email" placeholder="E-mail" />
                    <button className="final-step__btn">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default FinalStep