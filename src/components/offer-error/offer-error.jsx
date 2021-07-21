
const OfferError = ({creditType}) => {
    return (
        <>
            <h4 className="offer__title offer__title--error">Наш банк не выдаёт {creditType === "mortgage" && "ипотечные  кредиты " || creditType === "autoCredit" && "автокредиты "}
                  меньше {creditType === "mortgage" && "500 000" || creditType === "autoCredit" && "200 000 "} рублей.</h4>
            <p className="offer__error-text">Попробуйте использовать другие параметры для расчёта.</p>
        </>
    )
}

export default OfferError