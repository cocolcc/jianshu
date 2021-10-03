import * as actionTypes from './actionTypes';

export const storeAccountAction = (data) => ({
  type: actionTypes.STORE_ACCOUNT,
  data
})

export const storePasswordAction = (data) => ({
  type: actionTypes.STORE_PASSWORD,
  data
})

export const setErrowMessageAction = (data) => ({
  type: actionTypes.SET_ERROR_MESSAGE,
  data
})

export const fetchResultAction = (data) => ({
  type: actionTypes.FETCH_RESULT,
  data
})

export const loginAction = () => ({
  type: actionTypes.LOGIN,
})

export const logoutAction = () => ({
  type: actionTypes.LOGOUT,
})

export const taggleShowPasswordAction = () => ({
  type: actionTypes.TAGGLE_SHOW_PASSWORD,
})