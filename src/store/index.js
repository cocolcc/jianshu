import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount rootReducer, redux-dev-extention, sagaMiddleware on the store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
// then run the saga
sagaMiddleware.run(rootSaga);
export default store;