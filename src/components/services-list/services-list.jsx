const ServicesList = ({setActiveTab, activeTab}) => {

  const handleTab = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.dataset.name);
  };

  return (
    <section className="services-list">
      <div className="services-list-inner">
        <ul className="services-list-list">
          <li className={activeTab === `deposits` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a data-name="deposits" href="!#" className="services-list-item-link services-list-link--deposits" onClick={handleTab}>Вклады</a>
          </li>
          <li className={activeTab === `credits` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a data-name="credits" href="!#" className="services-list-item-link services-list-link--credits" onClick={handleTab}>Кредиты</a>
          </li>
          <li className={activeTab === `insurance` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a data-name="insurance" href="!#" className="services-list-item-link services-list-link--insurance" onClick={handleTab}>Страхование</a>
          </li>
          <li className={activeTab === `online` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a data-name="online" href="!#" className="services-list-item-link services-list-link--online" onClick={handleTab}>Онлайн-сервисы</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesList;
