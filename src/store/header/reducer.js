import * as actionTypes from "./actionTypes";

const defaultState = {
  isFocus: false 
}

const headerReducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      isFocus: true
    }
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      isFocus: false
    }
  }
  return state;
}

export default headerReducer;