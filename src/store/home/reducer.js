import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  recommendWriters: [],
  articlePage: 1,
  showScrollToTop: false
})

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_ARTICLE_LIST:
      return state.set('articleList', action.data);
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.data.get('articleList')),
        articlePage: action.data.get('articlePage')
      });
    case actionTypes.STORE_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    case actionTypes.STORE_RECOMMEND_WRITERS:
      return state.set('recommendWriters', action.data);
    case actionTypes.TAGGLE_SCROLL_TOP:
      return state.set('showScrollToTop', action.data);
    default:
      return state;
  }
}

export default homeReducer;