import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  isFocus: false 
})

const headerReducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('isFocus', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return  state.set('isFocus', false)
  }
  return state;
}

export default headerReducer;