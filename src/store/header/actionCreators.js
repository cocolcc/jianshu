import * as actionTypes from './actionTypes';

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const taggleSearchAction = () => ({
  type: actionTypes.TAGGLE_SEARCH
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

export const activeDiscoveryAction = () => ({
  type: actionTypes.ACTIVE_DISCOVERY,
})

export const activeFollowingAction = () => ({
  type: actionTypes.ACTIVE_FOLLOWING,
})

export const activeMessageAction = () => ({
  type: actionTypes.ACTIVE_MESSAGE,
})

export const activeLoginAction = () => ({
  type: actionTypes.ACTIVE_LOGIN,
})

export const activeLogoutAction = () => ({
  type: actionTypes.ACTIVE_LOGOUT,
})

export const activeWritingAction = () => ({
  type: actionTypes.ACTIVE_WRITING,
})