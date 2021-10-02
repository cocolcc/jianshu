import { all, fork } from 'redux-saga/effects';
import { saga as headerSaga } from './header';
import { saga as homeSaga } from './home';
import { saga as detailSaga } from './detail';

const forkSagas = [];
const sagas = [
  headerSaga,
  homeSaga,
  detailSaga
];
sagas.forEach(saga => {
  forkSagas.push(fork(saga))
});

const rootSaga = function* () {
  yield all([...forkSagas])
}


export default rootSaga;