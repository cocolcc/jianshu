import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  isFocus: false,
  isMouseIn: false,
  list: [],
  currentPage: 1,
  totalPage: 0,
})

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('isFocus', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('isFocus', false);
    case actionTypes.STORE_LIST:
      return state.merge({
        list: action.data.getIn(['list']),
        totalPage: action.data.getIn(['totalPage'])
      });
    case actionTypes.MOUSE_IN:
      return state.set('isMouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('isMouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('currentPage', action.data)
    default:
      return state;
  }
}

export default headerReducer;