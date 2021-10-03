import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  account: '',
  password: '',
  showPassword: false,
  isLogin: true,
  errMsg: ''
})

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_ACCOUNT:
      return state.set('account', action.data);
    case actionTypes.STORE_PASSWORD:
      return state.set('password', action.data);
    case actionTypes.LOGIN:
      return state.set('isLogin', true);
    case actionTypes.LOGOUT:
      return state.set('isLogin', false);
    case actionTypes.SET_ERROR_MESSAGE:
      return state.set('errMsg', action.data);
    case actionTypes.TAGGLE_SHOW_PASSWORD:
      return state.set('showPassword', !state.get('showPassword'))
    default:
      return state;
  }
}

export default loginReducer;