
import { ActionType } from "../store/action";

const initialState = {
  history: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_HAVE_CURRENCY:
      return extend(state, {
        haveCurrency: action.payload,
      });
    default:
      return state;
  }
}
