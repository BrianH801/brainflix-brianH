import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import search from '../assets/Icons/SVG/Icon-search.svg';
import upload from '../assets/Icons/SVG/Icon-upload.svg';
import avatar from '../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

//The Header Component displays the BrainFlix Logo the Search field and
//the Upload Button. It is re-used in the Upload Form

const Header = () => {
  return (
    <header className='header container'>
      <section className='header__logo'>
        <Link to='/'>
          <img src={logo} alt='brainflix logo' />
        </Link>
      </section>
      <section className='header__group-container'>
        <div className='header__search'>
          <img src={search} alt='brainflix search-box' />
          <div className='search__text'>Search</div>
        </div>
        <div className='header__upload'>
          <img src={upload} alt='brainflix upload-button' />
          <Link to='/upload' className='upload__text'>
            UPLOAD
          </Link>
        </div>
        <div className='header__avatar'>
          <img src={avatar} alt='brainflix avatar' />
        </div>
      </section>
    </header>
  );
};

export default Header;
