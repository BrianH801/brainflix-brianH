import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Header from './components/Header';
import VideoList from './components/VideoList/VideoList';
import CommentList from './components/CommentList/CommentList';
import CommentForm from './components/CommentForm';

import './styles/main.css';

class App extends Component {
  handleSubmitComment = (event) => {
    event.preventDefault();

    const id = uuidv4();
    const comment = event.target.comment.value;
    const time = Date.now();

    this.setState({
      comments: [...this.state.comments, { id, time, comment }],
    });
    event.target.reset();
  };

  state = {
    sideVideo: [
      {
        id: uuidv4(),
        title: 'Become A Travel Pro In One Easy Lesson',
        author: 'Todd Welch',
        image: '/images/video-list-1.jpg',
      },
      {
        id: uuidv4(),
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        author: 'Cornelia Blair',
        image: '/images/video-list-2.jpg',
      },
      {
        id: uuidv4(),
        title: 'Travel Health Useful Medical Information For',
        author: 'Glen Harper',
        image: '/images/video-list-3.jpg',
      },
      {
        id: uuidv4(),
        title: 'Cheap Airline Tickets Great Ways to Save',
        author: 'Emily Harper',
        image: '/images/video-list-4.jpg',
      },
      {
        id: uuidv4(),
        title: 'Take A Romantic Break In A Boutique Hotel',
        author: 'Ethan Owen',
        image: '/images/video-list-5.jpg',
      },
      {
        id: uuidv4(),
        title: 'Choose The Perfect Accommodations',
        author: 'Lydia Perez',
        image: '/images/video-list-6.jpg',
      },
      {
        id: uuidv4(),
        title: 'Cruising Destination Ideas',
        author: 'Timothy Austin',
        image: '/images/video-list-7.jpg',
      },
      {
        id: uuidv4(),
        title: 'Train Travel On Track For Safety',
        author: 'Scotty Cranmer',
        image: '/images/video-list-8.jpg',
      },
    ],
    //Main Video Object
    mainVideo: {
      id: uuidv4(),
      title: 'Another video about bikes',
      description: 'this is a cool video about bikes',
      channel: 'Bike Channel',
      image: '/images/video-list-0.jpg',
      views: '10 views',
      likes: 'I like this a lot',
      duration: 'two hour race',
      video: 'type of <string>',
      timestamp: 'type of <number>',
      comments: 'type of <array>',
    },
    comments: [
      {
        id: uuidv4(),
        name: 'Michael Lyons',
        time: new Date('12/18/2018'),
        comment:
          'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
      },
      {
        id: uuidv4(),
        name: 'Gary Wong',
        time: new Date('12/12/2018'),
        comment:
          'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
      },
      {
        id: uuidv4(),
        name: 'Theodore Duncan',
        time: new Date('11/15/2019'),
        comment:
          'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
      },
    ],
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
            <div className='column-container__form-list'>
              <CommentForm handleSubmitComment={this.handleSubmitComment} />
              <CommentList comments={this.state.comments} />
            </div>
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
