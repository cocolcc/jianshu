import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isFocus: false,
  isSearch: false,
  isMouseIn: false,
  list: [],
  currentPage: 1,
  totalPage: 0,
  isDiscoveryActive: false,
  isFollowingActive: false,
  isMessageActive: false,
  isLoginActive: false,
  isLogoutActive: false,
  isWritingActive: false
})

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('isFocus', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('isFocus', false);
    case actionTypes.TAGGLE_SEARCH:
      return state.set('isSearch', !state.get('isSearch'));
    case actionTypes.STORE_LIST:
      return state.merge({
        list: action.data.getIn(['list']),
        totalPage: action.data.getIn(['totalPage'])
      });
    case actionTypes.MOUSE_IN:
      return state.set('isMouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('isMouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('currentPage', action.data)
    case actionTypes.ACTIVE_DISCOVERY:
      return state.merge({
        isDiscoveryActive: true,
        isFollowingActive: false,
        isMessageActive: false,
        isLoginActive: false,
        isLogoutActive: false,
        isWritingActive: false
      });
    case actionTypes.ACTIVE_FOLLOWING:
      return state.merge({
        isDiscoveryActive: false,
        isFollowingActive: true,
        isMessageActive: false,
        isLoginActive: false,
        isLogoutActive: false,
        isWritingActive: false
      });
    case actionTypes.ACTIVE_MESSAGE:
      return state.merge({
        isDiscoveryActive: false,
        isFollowingActive: false,
        isMessageActive: true,
        isLoginActive: false,
        isLogoutActive: false,
        isWritingActive: false
      });
    case actionTypes.ACTIVE_LOGIN:
      return state.merge({
        isDiscoveryActive: false,
        isFollowingActive: false,
        isMessageActive: false,
        isLoginActive: true,
        isLogoutActive: false,
        isWritingActive: false
      });
    case actionTypes.ACTIVE_LOGOUT:
      return state.merge({
        isDiscoveryActive: false,
        isFollowingActive: false,
        isMessageActive: false,
        isLoginActive: false,
        isLogoutActive: true,
        isWritingActive: false
      });
    case actionTypes.ACTIVE_WRITING:
      return state.merge({
        isDiscoveryActive: false,
        isFollowingActive: false,
        isMessageActive: false,
        isLoginActive: false,
        isLogoutActive: false,
        isWritingActive: true
      });
    default:
      return state;
  }
}

export default headerReducer;