import * as actionTypes from './actionTypes';

export const storeMessageAction = (data) => ({
  type: actionTypes.STORE_MESSAGE,
  data
});

export const fetchMessageAction = (data) => ({
  type: actionTypes.FETCH_MESSAGE,
  data
});

export const messageLoadingOnAction = () => ({
  type: actionTypes.MESSAGE_LOADING_ON,
});

export const messageLoadingOffAction = () => ({
  type: actionTypes.MESSAGE_LOADING_OFF,
});


