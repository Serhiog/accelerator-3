const OnlineTab = () => {
  return (
    <section className="online">
      <div className="online__inner">
        <div className="online__inner-left">
          <h3 className="online__inner-left-title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h3>
          <ul className="online__inner-left-list">
            <li className="online__inner-left-list-item">Мобильный банк,<br className="online__inner-left-list-item-br online__inner-left-list-item-br--cancel" />
                            который всегда под рукой</li>
            <li className="online__inner-left-list-item">Приложение Лига-проездной позволит<br className="online__inner-left-list-item-br" /> вам оплачивать билеты по всему миру</li>
          </ul>
          <button className="online__inner-left-btn">Узнать подробнее</button>
        </div>
        <div className="online__inner-right"></div>
      </div>
    </section>
  );
};

export default OnlineTab;
