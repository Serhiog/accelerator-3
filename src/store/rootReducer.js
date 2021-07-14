import { ActionType } from "../store/action";
import { extend } from "../utils";

const initialState = {
  creditType: null,
  totalPrice: 2000000,
  firstPay: 200000,
  motherCapital: false,
  creditPeriod: 5,
  isPopup: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_CREDIT_TYPE:
      return extend(state, {
        creditType: action.payload,
      });
    case ActionType.SET_TOTAL_PRICE:
      return extend(state, {
        totalPrice: action.payload,
      });
    case ActionType.SET_FIRST_PAY:
      return extend(state, {
        firstPay: action.payload,
      });
    case ActionType.SET_MOTHER_CAPITAL:
      return extend(state, {
        motherCapital: action.payload,
      });
    case ActionType.SET_CREDIT_PERIOD:
      return extend(state, {
        creditPeriod: action.payload,
      });
    case ActionType.SET_POPUP:
      return extend(state, {
        isPopup: action.payload,
      });
    default:
      return state;
  }
}
