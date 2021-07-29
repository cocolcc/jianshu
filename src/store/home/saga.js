import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import axios from 'axios';

function* fetchArticleList() {
  try {
    const src = yield axios.get('/api/articleList.json');
    const articleList = src.data.data;
    const action = actionCreators.storeArticleListAction(fromJS(articleList));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* fetchMoreArticleList(action) {
  const articlePage = action.data;
  try {
    const src = yield axios.get(`/api/addArticleList.json?${articlePage}`);
    const data = {
      articleList: src.data.data,
      articlePage: articlePage + 1
    }
    const action = actionCreators.addArticleListAction(fromJS(data));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* fetchRecommendList() {
  try {
    const src = yield axios.get('/api/recommendList.json');
    const recommendList = src.data.data;
    const action = actionCreators.storeRecommendListAction(fromJS(recommendList));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* fetchRecommendWriters() {
  try {
    const src = yield axios.get('/api/recommendWriters.json');
    const recommendWriters = src.data.data.users;
    const action = actionCreators.storeRecommendWritersAction(fromJS(recommendWriters));
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* homeSaga() {
  yield takeEvery(actionTypes.FETCH_ARTICLE_LIST, fetchArticleList);
  yield takeEvery(actionTypes.FETCH_MORE_ARTICLE_LIST, fetchMoreArticleList);
  yield takeEvery(actionTypes.FETCH_RECOMMEND_LIST, fetchRecommendList);
  yield takeEvery(actionTypes.FETCH_RECOMMEND_WRITERS, fetchRecommendWriters);
}

export default homeSaga;