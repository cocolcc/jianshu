import { all, fork } from 'redux-saga/effects';
import { saga as headerSaga } from './header';
import { saga as homeSaga } from './home';
import { saga as detailSaga } from './detail';
import { saga as loginSaga } from './login';
import { saga as writingSaga } from './writing';
import { saga as followingSaga } from './following';
import { saga as messageSaga } from './message';

const forkSagas = [];
const sagas = [
  headerSaga,
  homeSaga,
  detailSaga,
  loginSaga,
  writingSaga,
  followingSaga,
  messageSaga
];
sagas.forEach(saga => {
  forkSagas.push(fork(saga))
});

const rootSaga = function* () {
  yield all([...forkSagas])
}


export default rootSaga;