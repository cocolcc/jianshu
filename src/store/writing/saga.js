import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchResult(action) {
  const article = action.data;
  try {
    yield put(actionCreators.uploadLoadingOnAction());
    //此api模拟接口默认回复成功
    const src = yield axios.get(getApiPath('/api/mockAcceptSuccess.json'), { params: { article } });
    // const src = yield axios.get(getApiPath('/api/writingLoadArticle.json'), { params: { article } });
    yield delay(1500);
    const success = src.data.success;
    if (success) {
      yield put(actionCreators.uploadSuccessfulAction());
    }
    yield put(actionCreators.uploadLoadingOffAction());
  } catch (e) {
    console.log(e);
  }
}

function* writingSaga() {
  yield takeEvery(actionTypes.UPLOAD_ARTICLE, fetchResult);
}

export default writingSaga;