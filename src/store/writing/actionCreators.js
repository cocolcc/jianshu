import * as actionTypes from './actionTypes';

export const storeArticleAction = (data) => ({
  type: actionTypes.STORE_ARTICLE,
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