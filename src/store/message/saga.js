import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchMessage() {
  try {
    yield put(actionCreators.messageLoadingOnAction());
    const src = yield axios.get(getApiPath('/api/messageMessage.json'));
    yield delay(1500);
    const message = src.data.data;
    const action = actionCreators.storeMessageAction(fromJS(message));
    yield put(action);
    yield put(actionCreators.messageLoadingOffAction());
  } catch (e) {
    console.log(e);
  }
}

function* messageSaga() {
  yield takeEvery(actionTypes.FETCH_MESSAGE, fetchMessage);
}

export default messageSaga;