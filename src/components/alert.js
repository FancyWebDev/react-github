import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alert-context';

export const Alert = () => {
  const { hide, alert } = useContext(AlertContext);  
  if (!alert) return null;

  return(
    <>
      <div className="alert alert-warning alert-dismissible mt-4" role="alert">
        <strong>{ alert.text }</strong>
        <button type="button" className="closer" aria-label="Close">
          <span aria-hidden="true" onClick={ hide } className="close">&times;</span>
        </button>
      </div>
    </>
  )
}