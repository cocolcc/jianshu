import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { filterEmptyValueInArray } from '../../utils/filterArray';

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  recommendWriters: [],
  articlePage: 1,
  showScrollToTop: false,
  articleListLoading: true,
  addArticleListLoading: false,
  recommendListLoading: true,
  recommendWritersListLoading: true,
  searchTags: [],
  searchTagsString: '',
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
    case actionTypes.STORE_SEARCH_TAGS:
      return state.merge({
        searchTags: action.data,
        searchTagsString: action.data.toJS().join(' ')
      });
    case actionTypes.STORE_SEARCH_TAGS_STRING:
      return state.merge({
        searchTagsString: action.data,
        searchTags: fromJS(filterEmptyValueInArray(action.data.split(' ')))
      })
    case actionTypes.ARTICLE_LIST_LOADING_ON:
      return state.set('articleListLoading', true);
    case actionTypes.ARTICLE_LIST_LOADING_OFF:
      return state.set('articleListLoading', false);
    case actionTypes.ADD_ARTICLE_LIST_LOADING_ON:
      return state.set('addArticleListLoading', true);
    case actionTypes.ADD_ARTICLE_LIST_LOADING_OFF:
      return state.set('addArticleListLoading', false);
    case actionTypes.RECOMMEND_LIST_LOADING_ON:
      return state.set('recommendListLoading', true);
    case actionTypes.RECOMMEND_LIST_LOADING_OFF:
      return state.set('recommendListLoading', false);
    case actionTypes.RECOMMEND_WRITERS_LIST_LOADING_ON:
      return state.set('recommendWritersListLoading', true);
    case actionTypes.RECOMMEND_WRITERS_LIST_LOADING_OFF:
      return state.set('recommendWritersListLoading', false);
    default:
      return state;
  }
}

export default homeReducer;