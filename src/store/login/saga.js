import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
// import { getApiPath } from '../../utils/getPath';
// import axios from 'axios';

function* fetchResult(action) {
  //以后需要进行加密包装
  const info = action.data;
  try {
    // const src = yield axios.get(getApiPath('/api/loginLogin.json'), { params: { info } });
    // const data = src.data.data;
    //此api模拟接口默认回复成功
    //在此判断
    if (info.account === 'lcc' && info.password === '123') {
      const action = actionCreators.loginAction()
      yield put(action);
    } else {
      yield put(actionCreators.setErrowMessageAction('用户或密码错误'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* loginSaga() {
  yield takeEvery(actionTypes.FETCH_RESULT, fetchResult);
}

export default loginSaga;