import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GitHubContext } from '../context/github/github-context';
import { Repos } from '../components/repos';

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GitHubContext);

  const userName = match.params.name;

  const { bio, avatar_url, login,
    followers, following, location,
    html_url, name, public_repos,
    public_gists, blog, company
  } = user;

  useEffect(() => {
    getUser(userName);
    getRepos(userName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className={'mt-4 text-center'}>Loading ...</p>
  } 

  if (!name) {
    return <p className={'text-center mt-4'}>
      Forbidden. Some Error! Wait a little and try again</p>
  }

  return (
    <>
      <Link to={'/'} className={'btn btn-info mt-4 mb-4'}>Back to Home page</Link>

      <div className="card mb-4 card-profile">
        <div className="card-body">
          <div className="row">

            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} className={'user-img'}/>
              <h1 className={'mt-2'}>{ name }</h1>
              { location && <p>Location: {location}</p> }
            </div>

            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>bio</p>
                </>
              }
              <a
                href={html_url}
                target={'_blank'}
                rel="noreferrer"
                className={'btn btn-dark mb-3'}
              >Open profile</a>
              <ul>
                { login && <li>
                  <strong>Username: </strong> {login}
                  </li> }

                { company && <li>
                  <strong>Company: </strong> {company}
                  </li> }

                { blog && <li>
                  <strong>Website: </strong> {blog}
                  </li> }
              </ul>

              <div className="badge badge-danger">Followers: {followers}</div>
              <div className="badge badge-primary">Following: {following}</div>
              <div className="badge badge-warning">Gists: {public_gists}</div>
              <div className="badge badge-success">Repos: {public_repos}</div>
            </div>

          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  );
}      