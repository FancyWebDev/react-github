import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alert-context';
import { GitHubContext } from '../context/github/github-context';

export const Search = () => {
  const { hide, show } = useContext(AlertContext);
  const [value, setValue] = useState('');
  const github = useContext(GitHubContext);

  const onSubmit = (event) => {
    if(event.key !== 'Enter') {
      return
    }

    if(value) {
      hide();
      github.search(value);
    } else {
      github.clearUsers();
      show('Type the username in github!');
    }
  }

  return(
    <>
      <input
        type="text"
        className={'form-control mt-4 w-25'}
        placeholder={'type name...'}
        onKeyPress={ onSubmit }
        value={ value }
        onChange={ event => setValue(event.target.value.trim()) }
      />
    </>
  )
}