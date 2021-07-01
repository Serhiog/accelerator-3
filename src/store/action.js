export const ActionType = {
  CHANGE_HAVE_CURRENCY: `CHANGE_HAVE_CURRENCY`,
};

export const ActionCreator = {
  handleHaveCurrencyChange: (payload) => ({
    type: ActionType.CHANGE_HAVE_CURRENCY,
    payload,
  }),
};
