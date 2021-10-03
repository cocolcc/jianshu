import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

function* fetchFollowingInfo() {
  try {
    const src = yield axios.get(getApiPath('/api/followingFollowingInfo.json'));
    const followingInfo = src.data.data;
    const action = actionCreators.storeFollowingInfoAction(fromJS(followingInfo));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* followingSaga() {
  yield takeEvery(actionTypes.FETCH_FOLLOWING_INFO, fetchFollowingInfo);
}

export default followingSaga;