export const ActionType = {
  SET_CREDIT_TYPE: "SET_CREDIT_TYPE",
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
  SET_FIRST_PAY: "SET_FIRST_PAY",
  SET_MOTHER_CAPITAL: "SET_MOTHER_CAPITAL",
  SET_CREDIT_PERIOD: "SET_CREDIT_PERIOD",
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

export const handleCreditPeriod = (payload) => ({
  type: ActionType.SET_CREDIT_PERIOD,
  payload,
});
