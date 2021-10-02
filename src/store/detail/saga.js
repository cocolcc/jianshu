import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

function* fetchDetail(action) {
  const id = action.data;
  try {
    const src = yield axios.get(getApiPath('/api/detailDetail_'+ id +'.json'));
    const data = src.data.data;
    const action = actionCreators.storeDetailAction(fromJS(data));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* detailSaga() {
  yield takeEvery(actionTypes.FETCH_DETAIL, fetchDetail);
}

export default detailSaga;