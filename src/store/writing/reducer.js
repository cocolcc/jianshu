import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  article: '',
  isLoaded: false,
})

const writingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_ARTICLE:
      return state.set('article', action.data);
    case actionTypes.LOAD_SUCCESSFUL:
      return state.set('isLoaded', true);
    case actionTypes.NEED_LOAD:
      return state.set('isLoaded', false);
    default:
      return state;
  }
}

export default writingReducer;