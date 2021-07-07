import * as actionTypes from './actionTypes';

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const fetchSearchListAction = () => ({
  type: actionTypes.FETCH_LIST,
})

export const storeSearchListAction = (data) => ({
  type: actionTypes.STORE_LIST,
  data
})