import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

function* fetchResult(action) {
  const article = action.data;
  try {
    const src = yield axios.get(getApiPath('/api/writingLoadArticle.json'), { params: { article } });
    const success = src.data.success;
    //此api模拟接口默认回复成功
    if (success) {
      yield put(actionCreators.loadSuccessfulAction());
    }
  } catch (e) {
    console.log(e);
  }
}

function* writingSaga() {
  yield takeEvery(actionTypes.LOAD_ARTICLE, fetchResult);
}

export default writingSaga;