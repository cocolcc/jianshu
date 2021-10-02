import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  detail: null
})

const detailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_DETAIL:
      return state.set('detail', action.data);
    default:
      return state;
  }
}

export default detailReducer;