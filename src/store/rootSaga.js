import { all, fork } from 'redux-saga/effects';
import headerSaga from './header/saga';

const forkSagas = [];
const sagas = [
  headerSaga
];
sagas.forEach(saga => {
  forkSagas.push(fork(saga))
});

const rootSaga = function* () {
  yield all([...forkSagas])
}


export default rootSaga;