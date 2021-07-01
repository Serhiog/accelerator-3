import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src="img/logo.svg" alt="Лига БАНК" className="footer__img" width={28}
            height={25} />
          <h3 className="footer__title">ЛИГА Банк</h3>
          <p className="footer__title-about">150015, г. Москва, ул. Московская, д. 32
                    Генеральная лицензия Банка России №1050
Ⓒ Лига Банк, 2019</p>
        </div>
        <ul className="footer__list">
          <li className="footer__item"><a className="footer__list-link" href="#">Услуги</a></li>
          <li className="footer__item"><a className="footer__list-link" href="#">Рассчитать кредит</a></li>
          <li className="footer__item"><a className="footer__list-link" href="#">Контакты</a></li>
          <li className="footer__item"><a className="footer__list-link" href="#">Задать вопрос</a></li>
        </ul>
        <div className="footer__short-call">
          <a href="tel: 0904" className="footer__short-number">*0904</a>
          <p className="footer__short-call-info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>
        <div className="footer__free-call">
          <a href="tel: 8 800 111 22 33" className="footer__free-number">8 800 111 22 33</a>
          <p className="footer__free-call-info">Бесплатный для всех городов России</p>
        </div>
        <ul className="footer__media-links">
          <li className="footer__item-media"><a className="footer__media-link" href="#"><span className="footer__fb"></span></a></li>
          <li className="footer__item-media"><a className="footer__media-link" href="#"><span className="footer__insta"></span></a></li>
          <li className="footer__item-media"><a className="footer__media-link" href="#"><span className="footer__twitter"></span></a></li>
          <li className="footer__item-media"><a className="footer__media-link" href="#"><span className="footer__youtube"></span></a></li>
        </ul>
      </div>
    </section>
  );
};


export default Footer;

