import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import header from './style/header.css';

const Header = () => {
  return (
    <header className='header flex-wrapper body-width'>
      <section className='header__logo-container'>
        <img src={logo} alt='brainflix logo' />
      </section>
      <section className='header__group-container'>
        <input type='search' id='header__search' placeholder='Search'></input>
        <button type='submit' id='header__upload'>
          {' '}
          + UPLOAD{' '}
        </button>
        <div className='header__avatar'></div>
      </section>
    </header>
  );
};

export default Header;
