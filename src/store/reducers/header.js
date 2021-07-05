import actionTypes from "../actionTypes";

const defaultState = {
  isFocus: false 
}

const headerReducer = (state = defaultState, action) => {
  if (action.type === actionTypes.HEADER_SEARCH_INPUT_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.isFocus = true;
    return newState;
  }
  if (action.type === actionTypes.HEADER_SEARCH_INPUT_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.isFocus = false;
    return newState;
  }
  return state;
}

export default headerReducer;