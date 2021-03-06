import { 
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING } from '../types';

const hendlers = {
  [GET_REPOS]: (state, {payload}) => ({...state, repos:payload, loading: false}),
  [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
  [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
  [CLEAR_USERS]: state => ({...state, users: []}),
  [SET_LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state
}

export const GitHubReducer = (state, action) => {
  const hendler = hendlers[action.type] || hendlers.DEFAULT
  return hendler(state, action);
}