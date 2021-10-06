import * as actionTypes from './actionTypes';

// Sync
export const storeTitleAction = (data) => ({
  type: actionTypes.STORE_TITLE,
  data
});

export const storeBodyAction = (data) => ({
  type: actionTypes.STORE_BODY,
  data
});

export const uploadSuccessfulAction = () => ({
  type: actionTypes.UPLOAD_SUCCESSFUL,
});

export const needUploadAction = () => ({
  type: actionTypes.NEED_UPLOAD,
});

export const uploadLoadingOnAction = () => ({
  type: actionTypes.UPLOAD_LOADING_ON,
});

export const uploadLoadingOffAction = () => ({
  type: actionTypes.UPLOAD_LOADING_OFF,
});

//Async
export const uploadArticleAction = (data) => ({
  type: actionTypes.UPLOAD_ARTICLE,
  data
});
