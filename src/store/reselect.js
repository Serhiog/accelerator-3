import { createSelector } from "reselect";
import {} from "../consts";
import { prettify, delSpaces } from "../utils";

export const getTotalPrice = (state) => {
  return state.totalPrice;
};

export const getCreditType = (state) => {
  return state.creditType;
};

export const getCreditFirstPay = (state) => {
  return state.firstPay;
};

export const getActualMotherCapital = (state) => {
  return state.motherCapital;
};

export const getCreditPeriod = (state) => {
  return state.creditPeriod;
};

export const getTotalCreditValue = createSelector(
  getTotalPrice,
  getCreditFirstPay,
  getActualMotherCapital,
  (totalPrice, firstPay, isCapital) => {
    return !isCapital
      ? +totalPrice - +firstPay
      : +totalPrice - +firstPay - 470000;
  }
);

export const getCreditPercent = createSelector(
  getCreditType,
  getTotalPrice,
  getCreditFirstPay,
  (creditType, totalPrice, firstPay) => {
    if (creditType === "mortgage") {
      const percent = totalPrice * 0.15;
      if (+firstPay <= +percent) {
        return 9.4;
      } else {
        return 8.5;
      }
    } else if (creditType === "autoCredit") {
      return "needFix";
    }
  }
);

export const getMonthPayValue = createSelector(
  getTotalCreditValue,
  getCreditPercent,
  getCreditPeriod,
  (totalPrice, percent, creditPeriod) => {
    percent = percent / 1200;
    creditPeriod = creditPeriod * 12;
    return prettify(
      Math.round(
        parseInt(+totalPrice * +percent) /
          (1 - Math.pow(1 + +percent, -creditPeriod))
      )
    );
  }
);

export const getMonthSalary = createSelector(
  getMonthPayValue,
  (totalMonthPay) => {
    return prettify(Math.round(+delSpaces(totalMonthPay) * 2.222));
  }
);
