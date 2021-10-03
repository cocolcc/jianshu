import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  followingInfo: []
})

const followingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_FOLLOWING_INFO:
      return state.set('followingInfo', action.data);
    default:
      return state;
  }
}

export default followingReducer;