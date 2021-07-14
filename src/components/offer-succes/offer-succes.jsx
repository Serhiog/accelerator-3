import { prettify } from "../../utils"

const OfferSucces = ({ finalPriceValue, percent, monthPayValue, monthSalary, setFinalStep, finalStep, setCountForm, countForm }) => {

    const handleSubmitBtn = () => {
        setFinalStep(!finalStep)
        finalStep && setCountForm(countForm + 1)
    }

    return (
        <>
            <h4 className="offer__title">Наше предложение</h4>
            <ul className="offer__list">
                <li className="offer__item">{prettify(finalPriceValue)} рублей
                    <span className="offer__item-about">Сумма ипотеки</span>
                </li>
                <li className="offer__item">{percent + "0 %"}
                    <span className="offer__item-about">Процентная ставка</span>
                </li>
                <li className="offer__item">{monthPayValue} рублей
                    <span className="offer__item-about">Ежемесячный платеж</span>
                </li>
                <li className="offer__item">{monthSalary} рублей
                    <span className="offer__item-about">Необходимый доход</span>
                </li>
            </ul>
            <button className="offer__btn" onClick={handleSubmitBtn}>Оформить заявку</button>
        </>
    )
}


export default OfferSucces