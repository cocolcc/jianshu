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

export const onMouseEnterAction = () => ({
  type: actionTypes.MOUSE_IN
})

export const onMouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePageAction = (data) => ({
  type: actionTypes.CHANGE_PAGE,
  data
})