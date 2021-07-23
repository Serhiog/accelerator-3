import { ActionType } from "../store/action";
import { extend } from "../utils";

const initialState = {
  creditType: null,
  totalPrice: 2000000,
  firstPay: 200000,
  motherCapital: false,
  isPopup: false,
  percentRange: 0,
  yearsRange: 0,
  casco: false,
  insurance: false,
  login: false,
  width: ``,
  overflow: false,
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
    case ActionType.SET_POPUP:
      return extend(state, {
        isPopup: action.payload,
      });
    case ActionType.RESET_INITIAL_VALUES_MORTGAGE:
      return extend(state, {
        totalPrice: 2000000,
        firstPay: 200000,
        percentRange: 10,
        yearsRange: 5,
      });
    case ActionType.RESET_INITIAL_VALUES_AUTO_CREDIT:
      return extend(state, {
        totalPrice: 2000000,
        firstPay: 200000,
        percentRange: 20,
        yearsRange: 1,
      });
    case ActionType.SET_PERCENT_RANGE:
      return extend(state, {
        percentRange: action.payload,
      });
    case ActionType.SET_YEARS_RANGE:
      return extend(state, {
        yearsRange: action.payload,
      });
    case ActionType.SET_CASCO:
      return extend(state, {
        casco: action.payload,
      });
    case ActionType.SET_INSURANCE:
      return extend(state, {
        insurance: action.payload,
      });
    case ActionType.SET_LOGIN:
      return extend(state, {
        login: action.payload,
      });
    case ActionType.SET_WINDOW_WIDTH:
      return extend(state, {
        width: action.payload,
      });
    case ActionType.SET_OVERFLOW:
      return extend(state, {
        overflow: action.payload,
      });
    default:
      return state;
  }
}
