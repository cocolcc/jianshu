import * as actionTypes from './actionTypes';

export const storeMessageAction = (data) => ({
  type: actionTypes.STORE_MESSAGE,
  data
})

export const fetchMessageAction = (data) => ({
  type: actionTypes.FETCH_MESSAGE,
  data
})

