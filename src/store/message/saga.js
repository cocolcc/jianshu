import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

function* fetchMessage() {
  try {
    const src = yield axios.get(getApiPath('/api/messageMessage.json'));
    const message = src.data.data;
    const action = actionCreators.storeMessageAction(fromJS(message));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* messageSaga() {
  yield takeEvery(actionTypes.FETCH_MESSAGE, fetchMessage);
}

export default messageSaga;