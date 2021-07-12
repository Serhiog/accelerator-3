const CreditTab = () => {
    return (
        <section className="credit">
            <div className="credit__inner">
                <div className="credit__inner-left">
                    <h3 className="credit__inner-left-title">Лига Банк выдает кредиты под любые цели</h3>
                    <ul className="credit__inner-left-list">
                        <li className="credit__inner-left-list-item">Ипотечный кредит</li>
                        <li className="credit__inner-left-list-item">Автокредит</li>
                        <li className="credit__inner-left-list-item">Потребительский кредит</li>
                    </ul>
                    <p className="credit__inner-left-info">Рассчитайте ежемесячный платеж
и ставку по кредиту воспользовавшись нашим кредитным калькулятором</p>
                </div>
                <div className="credit__inner-right"></div>
            </div>
        </section>
    )
}

export default CreditTab