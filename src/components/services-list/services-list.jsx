import PropTypes from "prop-types";
import React from "react";
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
            <a tabIndex="0" data-name="deposits" href="!#" className="services-link services-link--deposits" onClick={handleTab}>Вклады</a>
          </li>
          <li className={activeTab === `credits` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a tabIndex="0" data-name="credits" href="!#" className="services-link services-link--credits" onClick={handleTab}>Кредиты</a>
          </li>
          <li className={activeTab === `insurance` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a tabIndex="0" data-name="insurance" href="!#" className="services-link services-link--insurance" onClick={handleTab}>Страхование</a>
          </li>
          <li className={activeTab === `online` ? `services-list-item services-list-item--active` : `services-list-item`}>
            <a tabIndex="0" data-name="online" href="!#" className="services-link services-link--online" onClick={handleTab}>Онлайн-сервисы</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

ServicesList.propTypes = {
  setActiveTab: PropTypes.any,
  activeTab: PropTypes.any,
};


export default ServicesList;
