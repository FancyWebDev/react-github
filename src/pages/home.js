import React, { useContext } from 'react';
import { Card } from '../components/card';
import { Search } from '../components/search';
import { GitHubContext } from '../context/github/github-context';

export const Home = () => {
  const { loading, users } = useContext(GitHubContext);

  return (
    <>
      <Search />
      <div className={'row'}>
        { loading 
          ? <p className={'mt-4'}>Loading ...</p>
          : users.map(user => {
              return (
                <div className={'col-md-4 mb-4'} key={ user.id }> 
                  <Card user={ user }/>
                </div>
              )
            }) 
        }
      </div>
    </>
  );
}      