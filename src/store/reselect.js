import { createSelector } from "reselect";
import { creditTypes, creditPercent, initialNumbers } from "../consts";
import { prettify, delSpaces, setOnlyNums } from "../utils";

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

export const getActualCasco = (state) => {
  return state.casco;
};

export const getActualInsurance = (state) => {
  return state.insurance;
};

export const getCreditPeriod = (state) => {
  return state.yearsRange;
};

export const getTotalCreditValue = createSelector(
  getTotalPrice,
  getCreditFirstPay,
  getActualMotherCapital,
  (totalPrice, firstPay, isCapital) => {
    return !isCapital
      ? +totalPrice - +firstPay
      : +totalPrice - +firstPay - initialNumbers.capital;
  }
);

export const getCreditPercent = createSelector(
  getCreditType,
  getTotalPrice,
  getCreditFirstPay,
  getActualCasco,
  getActualInsurance,
  (creditType, totalPrice, firstPay, casco, insurance) => {
    if (creditType === creditTypes.mortgage) {
      const percent = totalPrice * creditPercent.zero;
      if (+firstPay <= +percent) {
        return creditPercent.nine;
      } else {
        return creditPercent.eight;
      }
    } else if (creditType === creditTypes.auto) {
      if (totalPrice >= initialNumbers.autoMax) {
        if (casco && insurance) {
          return creditPercent.three;
        }
        if (casco || insurance) {
          return creditPercent.eight;
        }
        return creditPercent.fifteen;
      }
      if (totalPrice < initialNumbers.autoMax) {
        if (casco && insurance) {
          return creditPercent.three;
        }
        if (casco || insurance) {
          return creditPercent.eight;
        }
        return creditPercent.sixteen;
      }
    }
    return true;
  }
);

export const getMonthPayValue = createSelector(
  getTotalCreditValue,
  getCreditPercent,
  getCreditPeriod,
  (totalPrice, percent, creditPeriod) => {
    percent = +percent / initialNumbers.oneThousandHundred;
    creditPeriod = creditPeriod * 12;
    return prettify(
      Math.round(
        parseInt(+totalPrice * +percent, 10) /
          (1 - Math.pow(1 + +percent, -creditPeriod))
      )
    );
  }
);

export const getMonthSalary = createSelector(
  getMonthPayValue,
  (totalMonthPay) => {
    return prettify(
      Math.round(
        +delSpaces(setOnlyNums(totalMonthPay)) * initialNumbers.middlePercent
      )
    );
  }
);
