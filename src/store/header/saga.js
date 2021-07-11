import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import axios from 'axios';

function* fetchSearchList() {
  try {
    const src = yield axios.get('/api/headerSearchList.json');
    const list = src.data.data;
    const data = {
      list,
      totalPage: Math.ceil(list.length / 10)
    }
    const action = actionCreators.storeSearchListAction(fromJS(data));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* headerSaga() {
  yield takeEvery(actionTypes.FETCH_LIST, fetchSearchList);
}

export default headerSaga;