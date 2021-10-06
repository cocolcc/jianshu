import * as actionTypes from './actionTypes';

export const storeFollowingInfoAction = (data) => ({
  type: actionTypes.STORE_FOLLOWING_INFO,
  data
});

export const fetchFollowingInfoAction = (data) => ({
  type: actionTypes.FETCH_FOLLOWING_INFO,
  data
});

export const followingInfoLoadingOnAction = () => ({
  type: actionTypes.FOLLOWING_INFO_LOADING_ON,
});

export const followingInfoLoadingOffAction = () => ({
  type: actionTypes.FOLLOWING_INFO_LOADING_OFF,
});

