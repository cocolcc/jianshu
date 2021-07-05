import actionTypes from './actionTypes';

const  getHeaderSearchInputFocusAction = () => {
  return {
    type: actionTypes.HEADER_SEARCH_INPUT_FOCUS
  }
}

const getHeaderSearchInputBlurAction = () => {
  return {
      type: actionTypes.HEADER_SEARCH_INPUT_BLUR
    }
}

const actionCreators = {
  getHeaderSearchInputFocusAction: getHeaderSearchInputFocusAction,
  getHeaderSearchInputBlurAction: getHeaderSearchInputBlurAction
}

export default actionCreators;