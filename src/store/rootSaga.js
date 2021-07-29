import { all, fork } from 'redux-saga/effects';
import headerSaga from './header/saga';
import homeSaga from './home/saga';

const forkSagas = [];
const sagas = [
  headerSaga,
  homeSaga
];
sagas.forEach(saga => {
  forkSagas.push(fork(saga))
});

const rootSaga = function* () {
  yield all([...forkSagas])
}


export default rootSaga;