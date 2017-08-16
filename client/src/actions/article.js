import { getData, putData } from './index';
import { ARTICLE_ERROR, UPDATE_ARTICLE, FETCH_ARTICLES } from './types';

export function fetchArticles() {
  const url = '/articles';
  return dispatch => getData(FETCH_ARTICLES, ARTICLE_ERROR, true, url, dispatch);
}
export function voteArticle(data) {
  const url = '/articles/vote';
  return dispatch => putData(UPDATE_ARTICLE, ARTICLE_ERROR, true, url, dispatch, data);
}