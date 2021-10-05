import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import { select } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchDetail(action) {
  const id = action.data;
  try {
    if (id === 'lcc') {
      //为了模拟后台而mock的功能：显示刚刚提交的文章
      const currentTitle = yield select(state => state.getIn(['writing', 'title']))
      const currentBody = yield select(state => state.getIn(['writing', 'body']))
      let data = {
        id: 'lcc',
        title: currentTitle,
        imgUrl: '',
        paragraph: currentBody.split('\n')
      }
      const action = actionCreators.storeDetailAction(fromJS(data));
      yield put(action);
    } else {
      const src = yield axios.get(getApiPath('/api/detailDetail_'+ id +'.json'));
      const data = src.data.data;
      const action = actionCreators.storeDetailAction(fromJS(data));
      yield put(action);
    }
  } catch (e) {
    console.log(e);
  }
}

function* detailSaga() {
  yield takeEvery(actionTypes.FETCH_DETAIL, fetchDetail);
}

export default detailSaga;