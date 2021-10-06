import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from "./actionTypes";
import * as actionCreators from './actionCreators';
import { fromJS } from "immutable";
import { getApiPath } from '../../utils/getPath';
import axios from 'axios';
import { select } from 'redux-saga/effects';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchArticleList() {
  try {
    yield put(actionCreators.articleListLoadingOnAction());
    const src = yield axios.get(getApiPath('/api/articleList.json'));
    yield delay(1500);
    let articleList = src.data.data;

    //为了模拟后台而mock的功能：显示刚刚提交的文章
    let currentTitle = yield select(state => state.getIn(['writing', 'title']));
    let currentBody = yield select(state => state.getIn(['writing', 'body']));
    let currentIsUploaded = yield select(state => state.getIn(['writing', 'isUploaded']));
    if (currentIsUploaded) {
      articleList.splice(0, 0, {
      id: 'lcc',
      title: currentTitle,
      desc: currentBody.slice(0, 100) + '...',
      imgUrl: '',
      diamondNum: 0,
      auther: 'lcc',
      commentsNum: 0,
      likeNum: 0
      });
    }
    const action = actionCreators.storeArticleListAction(fromJS(articleList));
    yield put(action);
    yield put(actionCreators.articleListLoadingOffAction());
  } catch (e) {
    console.log(e);
  }
}

function* fetchMoreArticleList(action) {
  const articlePage = action.data;
  try {
    //取数据前打开loading
    yield put(actionCreators.addArticleListLoadingOnAction());
    const src = yield axios.get(getApiPath(`/api/addArticleList.json?${articlePage}`));
    yield delay(1500);
    const data = {
      articleList: src.data.data,
      articlePage: articlePage + 1
    }
    const action = actionCreators.addArticleListAction(fromJS(data));
    yield put(action);
    //取数据之后关闭loading
    yield put(actionCreators.addArticleListLoadingOffAction());
  } catch (e) {
    console.log(e);
  }
}

function* fetchRecommendList() {
  try {
    yield put(actionCreators.recommendListLoadingOnAction());
    const src = yield axios.get(getApiPath('/api/recommendList.json'));
    yield delay(1500);
    const recommendList = src.data.data;
    const action = actionCreators.storeRecommendListAction(fromJS(recommendList));
    yield put(action);
    yield put(actionCreators.recommendListLoadingOffAction());
  } catch (e) {
    console.log(e);
  }
}

function* fetchRecommendWriters() {
  try {
    yield put(actionCreators.recommendWritersListLoadingOnAction());
    const src = yield axios.get(getApiPath('/api/recommendWriters.json'));
    yield delay(1500);
    const recommendWriters = src.data.data.users;
    const action = actionCreators.storeRecommendWritersAction(fromJS(recommendWriters));
    yield put(action);
    yield put(actionCreators.recommendWritersListLoadingOffAction());
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