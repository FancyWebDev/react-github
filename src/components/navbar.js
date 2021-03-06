import React from 'react';
import './index.sass';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
      <div className={'navbar-brand'}>
        GitHub Search
            </div>
      <ul className={'navbar-nav'}>
        <li className={'nav-item'}>
          <Link to={'/'} className={'nav-link'}>Home</Link>
        </li>
        <li className={'nav-item'}>
          <Link to={'/about/'} className={'nav-link'}>About</Link>
        </li>
      </ul>
    </nav>
  );
}