import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import axios from 'axios';

function* fetchSearchList() {
  try {
    const src = yield axios.get('/api/headerSearchList.json');
    const action = actionCreators.storeSearchListAction(fromJS(src.data.data));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* headerSaga() {
  yield takeEvery(actionTypes.FETCH_LIST, fetchSearchList);
}

export default headerSaga;