import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import search from '../assets/Icons/SVG/Icon-search.svg';
import upload from '../assets/Icons/SVG/Icon-upload.svg';
import avatar from '../assets/images/Mohan-muruge.jpg';

const Header = () => {
  return (
    <header className='header flex-wrapper body-width'>
      <section className='header__logo'>
        <img src={logo} alt='brainflix logo' />
      </section>
      <section className='header__group-container'>
        <div className='header__search'>
          <img src={search} alt='brainflix search-box' />
          <div className='search__text'>Search</div>
        </div>
        <div className='header__upload'>
          <img src={upload} alt='brainflix upload-button' />
          <div className='upload__text'>UPLOAD</div>
        </div>
        <div className='header__avatar'>
          <img src={avatar} alt='brainflix avatar' />
        </div>
      </section>
    </header>
  );
};

export default Header;
