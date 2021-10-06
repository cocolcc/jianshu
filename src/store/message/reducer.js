import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  message: [],
  messageLoading: true,
})

const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_MESSAGE:
      return state.set('message', action.data);
    case actionTypes.MESSAGE_LOADING_ON:
      return state.set('messageLoading', true);
    case actionTypes.MESSAGE_LOADING_OFF:
      return state.set('messageLoading', false);
    default:
      return state;
  }
}

export default messageReducer;