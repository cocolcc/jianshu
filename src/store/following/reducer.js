import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  followingInfo: [],
  followingInfoLoading: true,
})

const followingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_FOLLOWING_INFO:
      return state.set('followingInfo', action.data);
    case actionTypes.FOLLOWING_INFO_LOADING_ON:
      return state.set('followingInfoLoading', true);
    case actionTypes.FOLLOWING_INFO_LOADING_OFF:
      return state.set('followingInfoLoading', false);
    default:
      return state;
  }
}

export default followingReducer;