export const ActionType = {
  SET_CREDIT_TYPE: `SET_CREDIT_TYPE`,
  SET_TOTAL_PRICE: `SET_TOTAL_PRICE`,
  SET_FIRST_PAY: `SET_FIRST_PAY`,
  SET_MOTHER_CAPITAL: `SET_MOTHER_CAPITAL`,
  SET_CREDIT_PERIOD: `SET_CREDIT_PERIOD`,
  SET_POPUP: `SET_POPUP`,
  RESET_INITIAL_VALUES_MORTGAGE: `RESET_INITIAL_VALUES_MORTGAGE`,
  RESET_INITIAL_VALUES_AUTO_CREDIT: `RESET_INITIAL_VALUES_AUTO_CREDIT`,
  SET_PERCENT_RANGE: `SET_PERCENT_RANGE`,
  SET_YEARS_RANGE: `SET_YEARS_RANGE`,
  SET_CASCO: `SET_CASCO`,
  SET_INSURANCE: `SET_INSURANCE`,
  SET_LOGIN: `SET_LOGIN`,
  SET_WINDOW_WIDTH: `SET_WINDOW_WIDTH`,
  SET_OVERFLOW: `SET_OVERFLOW`
};

export const handleSetCreditType = (payload) => ({
  type: ActionType.SET_CREDIT_TYPE,
  payload,
});

export const handleSetTotalPrice = (payload) => ({
  type: ActionType.SET_TOTAL_PRICE,
  payload,
});

export const handleFirstPayDeal = (payload) => ({
  type: ActionType.SET_FIRST_PAY,
  payload,
});

export const handleMotherCapital = (payload) => ({
  type: ActionType.SET_MOTHER_CAPITAL,
  payload,
});

export const handlePopup = (payload) => ({
  type: ActionType.SET_POPUP,
  payload,
});

export const handleResetInitialValuesMortgage = () => ({
  type: ActionType.RESET_INITIAL_VALUES_MORTGAGE,
});

export const handleResetInitialValuesAutoCredit = () => ({
  type: ActionType.RESET_INITIAL_VALUES_AUTO_CREDIT,
});

export const handlePercentRange = (payload) => ({
  type: ActionType.SET_PERCENT_RANGE,
  payload,
});

export const handleYearsRange = (payload) => ({
  type: ActionType.SET_YEARS_RANGE,
  payload,
});

export const handleSetCasco = (payload) => ({
  type: ActionType.SET_CASCO,
  payload,
});

export const handleSetInsurance = (payload) => ({
  type: ActionType.SET_INSURANCE,
  payload,
});

export const handleSetLogin = (payload) => ({
  type: ActionType.SET_LOGIN,
  payload,
});

export const handleSetWindowWidth = (payload) => ({
  type: ActionType.SET_WINDOW_WIDTH,
  payload,
});

export const handleBodyOverflow = (payload) => ({
  type: ActionType.SET_OVERFLOW,
  payload,
});
