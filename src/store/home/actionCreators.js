import * as actionTypes from './actionTypes';

//Sync
export const storeArticleListAction = (data) => ({
  type: actionTypes.STORE_ARTICLE_LIST,
  data
});

export const addArticleListAction = (data) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  data
});

export const storeRecommendListAction = (data) => ({
  type: actionTypes.STORE_RECOMMEND_LIST,
  data
});

export const storeRecommendWritersAction = (data) => ({
  type: actionTypes.STORE_RECOMMEND_WRITERS,
  data
});

export const taggleScrollTopAction = (data) => ({
  type: actionTypes.TAGGLE_SCROLL_TOP,
  data
});

export const articleListLoadingOnAction = () => ({
  type: actionTypes.ARTICLE_LIST_LOADING_ON,
});

export const articleListLoadingOffAction = () => ({
  type: actionTypes.ARTICLE_LIST_LOADING_OFF,
});

export const addArticleListLoadingOnAction = () => ({
  type: actionTypes.ADD_ARTICLE_LIST_LOADING_ON,
});

export const addArticleListLoadingOffAction = () => ({
  type: actionTypes.ADD_ARTICLE_LIST_LOADING_OFF,
});

export const recommendListLoadingOnAction = () => ({
  type: actionTypes.RECOMMEND_LIST_LOADING_ON,
});

export const recommendListLoadingOffAction = () => ({
  type: actionTypes.RECOMMEND_LIST_LOADING_OFF,
});

export const recommendWritersListLoadingOnAction = () => ({
  type: actionTypes.RECOMMEND_WRITERS_LIST_LOADING_ON,
});

export const recommendWritersListLoadingOffAction = () => ({
  type: actionTypes.RECOMMEND_WRITERS_LIST_LOADING_OFF,
});

//Async
export const fetchArticleListAction = () => ({
  type: actionTypes.FETCH_ARTICLE_LIST
});

export const fetchMoreArticleListAction = (data) => ({
  type: actionTypes.FETCH_MORE_ARTICLE_LIST,
  data
});

export const fetchRecommendListAction = () => ({
  type: actionTypes.FETCH_RECOMMEND_LIST
});

export const fetchRecommendWritersAction = () => ({
  type: actionTypes.FETCH_RECOMMEND_WRITERS
});