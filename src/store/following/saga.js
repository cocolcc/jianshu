import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchFollowingInfo() {
  try {
    yield put(actionCreators.followingInfoLoadingOnAction());
    const src = yield axios.get(getApiPath('/api/followingFollowingInfo.json'));
    yield delay(1500);
    const followingInfo = src.data.data;
    const action = actionCreators.storeFollowingInfoAction(fromJS(followingInfo));
    yield put(action);
    yield put(actionCreators.followingInfoLoadingOffAction());
  } catch (e) {
    console.log(e);
  }
}

function* followingSaga() {
  yield takeEvery(actionTypes.FETCH_FOLLOWING_INFO, fetchFollowingInfo);
}

export default followingSaga;