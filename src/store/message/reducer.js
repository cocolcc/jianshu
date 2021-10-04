import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  message: []
})

const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_MESSAGE:
      return state.set('message', action.data);
    default:
      return state;
  }
}

export default messageReducer;