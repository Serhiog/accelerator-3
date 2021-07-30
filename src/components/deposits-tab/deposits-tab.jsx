import React from "react";

const DepositsTab = () => {
  return (
    <section className="deposit">
      <div className="deposit__inner">
        <div className="deposit__inner-left">
          <h3 className="deposit__inner-left-title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h3>
          <ul className="deposit__inner-left-list">
            <li className="deposit__inner-left-list-item">Проценты по вкладам до 7%</li>
            <li className="deposit__inner-left-list-item">Разнообразные условия</li>
            <li className="deposit__inner-left-list-item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
          </ul>
          <button className="deposit__inner-left-btn">Узнать подробнее</button>
        </div>
        <div className="deposit__inner-right"></div>
      </div>
    </section>
  );
};

export default DepositsTab;
