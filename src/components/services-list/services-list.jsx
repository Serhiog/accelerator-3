const ServicesList = () => {
    return (
        <section className="services-list">
            <div className="services-list-inner">
                <ul className="services-list-list">
                    <li className="services-list-item">
                        <a href="!#" className="services-list-item-link services-list-link--deposits">Вклады</a>
                    </li>
                    <li className="services-list-item ">
                        <a href="!#" className="services-list-item-link services-list-link--credits">Кредиты</a>
                    </li>
                    <li className="services-list-item ">
                        <a href="!#" className="services-list-item-link services-list-link--insurance">Страхование</a>
                    </li>
                    <li className="services-list-item ">
                        <a href="!#" className="services-list-item-link services-list-link--online">Онлайн-сервисы</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ServicesList