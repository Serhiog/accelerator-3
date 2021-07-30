import {creditTypes} from "../../consts";
import PropTypes from "prop-types";
import React from "react";
const OfferError = ({creditType}) => {
  return (
    <>
      <h4 className="offer__title offer__title--error">Наш банк не выдаёт {creditType === creditTypes.mortgage && `ипотечные  кредиты ` || creditType === creditTypes.auto && `автокредиты `}
        меньше {creditType === creditTypes.mortgage && `500 000` || creditType === creditTypes.auto && `200 000 `} рублей.</h4>
      <p className="offer__error-text">Попробуйте использовать другие параметры для расчёта.</p>
    </>
  );
};

OfferError.propTypes = {
  creditType: PropTypes.any,
};

export default OfferError;
