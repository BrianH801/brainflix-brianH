import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Header from './components/CommentList/Header';
import VideoList from './components/VideoList/VideoList';
import Form from './components/Form';
import './styles/main.css';

class App extends React.Component {
  state = {
    sideVideo: [
      {
        id: uuidv4(),
        title: 'Become A Travel Pro In One Easy Lesson',
        author: 'Todd Welch',
        image: '/Images/video-list-1.jpg',
      },
      {
        id: uuidv4(),
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        author: 'Cornelia Blair',
        image: '../public/Images/video-list-2.jpg',
      },
      {
        id: uuidv4(),
        title: 'Travel Health Useful Medical Information For',
        author: 'Glen Harper',
        image: '../public/Images/video-list-3.jpg',
      },
      {
        id: uuidv4(),
        title: 'Cheap Airline Tickets Great Ways to Save',
        author: 'Emily Harper',
        image: '../public/Images/video-list-4.jpg',
      },
      {
        id: uuidv4(),
        title: 'Take A Romantic Break In A Boutique Hotel',
        author: 'Ethan Owen',
        image: '../public/Images/video-list-5.jpg',
      },
      {
        id: uuidv4(),
        title: 'Choose The Perfect Accommodations',
        author: 'Lydia Perez',
        image: '../public/Images/video-list-6.jpg',
      },
      {
        id: uuidv4(),
        title: 'Cruising Destination Ideas',
        author: 'Timothy Austin',
        image: '../public/Images/video-list-7.jpg',
      },
      {
        id: uuidv4(),
        title: 'Train Travel On Track For Safety',
        author: 'Scotty Cranmer',
        image: '../public/Images/video-list-8.jpg',
      },
    ],
    //Main Video Object
    mainVideo: {
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
    },
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Banner mainVideo={this.state.mainVideo} />
        <div className='column-container container flex-wrapper'>
          <div className='column-container__left'>
            {
              // video details will go here
            }
            <Form />
          </div>
          <div className='column-container__right'>
            <VideoList videos={this.state.sideVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
