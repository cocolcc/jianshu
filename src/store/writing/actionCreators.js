import * as actionTypes from './actionTypes';

export const storeTitleAction = (data) => ({
  type: actionTypes.STORE_TITLE,
  data
});

export const storeBodyAction = (data) => ({
  type: actionTypes.STORE_BODY,
  data
});

export const loadSuccessfulAction = () => ({
  type: actionTypes.LOAD_SUCCESSFUL,
});

export const needLoadAction = () => ({
  type: actionTypes.NEED_LOAD,
});

export const loadArticleAction = (data) => ({
  type: actionTypes.LOAD_ARTICLE,
  data
});