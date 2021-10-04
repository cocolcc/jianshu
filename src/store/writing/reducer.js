import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  body: '',
  isLoaded: false,
})

const writingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_TITLE:
      return state.set('title', action.data);
    case actionTypes.STORE_BODY:
      return state.set('body', action.data);
    case actionTypes.LOAD_SUCCESSFUL:
      return state.set('isLoaded', true);
    case actionTypes.NEED_LOAD:
      return state.set('isLoaded', false);
    default:
      return state;
  }
}

export default writingReducer;