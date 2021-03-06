import React, { useReducer } from 'react';
import { GitHubContext } from './github-context';
import { GitHubReducer } from './github-reducer';
import { 
  CLEAR_USERS, 
  GET_REPOS, 
  GET_USER, 
  SEARCH_USERS, 
  SET_LOADING } from '../types';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET 

const withEnv = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GitHubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false    
  }

  const [state, dispatch] = useReducer(GitHubReducer, initialState);
  const { Provider } = GitHubContext;

  const search = async(value) => {
    setLoading();
    
    const data = await fetch(withEnv(`https://api.github.com/search/users?q=${value}&`))
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res.items;
      })

    dispatch({
      type: SEARCH_USERS,
      payload: data
    });
  }

  const getUser = async(login) => {
    setLoading();

    const data = await fetch(withEnv(`https://api.github.com/users/${login}?`))
      .then(res => {
        return res.json();
      })

    dispatch({
      type: GET_USER,
      payload: data
    });
  }
  
  const getRepos = async(name) => {
    setLoading();

    const data = await fetch(withEnv(`https://api.github.com/users/${name}/repos?
      per_page=5&`))
      .then(res => {
        return res.json();
      })

    dispatch({
      type: GET_REPOS,
      payload: data
    });
  }

  const setLoading = () => dispatch({type: SET_LOADING}); 

  const clearUsers = () => dispatch({type: CLEAR_USERS});

  const { users, user, loading, repos } = state;

  return(
    <Provider value={
      { 
        search, setLoading, getRepos, getUser, clearUsers, 
        users, user, loading, repos 
      }
    }>
      { children }
    </Provider>
  )
}