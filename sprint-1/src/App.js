import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import './components/style/app.css';
import './components/style/header.css';
import './components/style/banner.css';
import './components/style/utilities.css';
import './components/style/variables.css';

function App() {
  return (
    <div className='App'>
      <Header />;
      <Banner />;
    </div>
  );
}

export default App;
