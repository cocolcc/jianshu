import * as actionTypes from './actionTypes';

export const storeFollowingInfoAction = (data) => ({
  type: actionTypes.STORE_FOLLOWING_INFO,
  data
})

export const fetchFollowingInfoAction = (data) => ({
  type: actionTypes.FETCH_FOLLOWING_INFO,
  data
})

