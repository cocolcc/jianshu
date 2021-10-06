import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  body: '',
  isUploaded: false,
  uploadLoading: false,
})

const writingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_TITLE:
      return state.set('title', action.data);
    case actionTypes.STORE_BODY:
      return state.set('body', action.data);
    case actionTypes.UPLOAD_SUCCESSFUL:
      return state.set('isUploaded', true);
    case actionTypes.NEED_UPLOAD:
      return state.set('isUploaded', false);
    case actionTypes.UPLOAD_LOADING_ON:
      return state.set('uploadLoading', true);
    case actionTypes.UPLOAD_LOADING_OFF:
      return state.set('uploadLoading', false);
    default:
      return state;
  }
}

export default writingReducer;