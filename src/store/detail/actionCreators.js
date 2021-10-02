import * as actionTypes from './actionTypes';

export const storeDetailAction = (data) => ({
  type: actionTypes.STORE_DETAIL,
  data
})

export const fetchDetailAction = (data) => ({
  type: actionTypes.FETCH_DETAIL,
  data
})