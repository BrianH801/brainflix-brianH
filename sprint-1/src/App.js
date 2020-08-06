import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Header from './components/Header';
import VideoList from './components/VideoList/VideoList';
import Form from './components/Form';
import './styles/main.css';

function App() {
  const sideVideo = [
    {
      id: uuidv4(),
      title: 'A video about bikes',
      channel: 'Bike Channel',
      image: '/images/video-list-0.jpg',
    },
    {
      id: uuidv4(),
      title: 'A video about bikes',
      channel: 'Bike Channel',
      image: '/images/video-list-0.jpg',
    },
  ];
  //Main Video Object
  const mainVideo = {
    id: uuidv4(),
    title: 'Another video about bikes',
    description: 'this is a cool video about bikes',
    channel: 'Bike Channel',
    image: '/images/video-list-1.jpg',
    views: '10 views',
    likes: 'I like this a lot',
    duration: 'two hour race',
    video: 'type of <string>',
    timestamp: 'type of <number>',
    comments: 'type of <array>',
  };

  return (
    <div className='App'>
      <Header />;
      <Banner mainVideo={mainVideo} />;
      <Form />
      <VideoList videos={sideVideo} />;
    </div>
  );
}

export default App;
