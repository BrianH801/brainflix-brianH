import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Header from './components/Header';
import VideoList from './components/VideoList/VideoList';
import CommentList from './components/CommentList/CommentList';
import CommentForm from './components/CommentForm';
import VideoInfo from './components/VideoInfo';
import { API_KEY } from './env/env_variables';

import './styles/main.css';
//?apiKey=${API_KEY}
const API_URL = `https://project-2-api.herokuapp.com`;
const VIDEO_URL = `https://project-2-api.herokuapp.com`;

class App extends Component {
  state = {
    sideVideos: [],
    mainVideo: [],
    comments: [],
    videoDetails: {},
  };

  componentDidMount() {
    // sessionStorage.setItem('defaultSearch', 'id');
    axios
      .get(`${VIDEO_URL}/videos/1af0jruup5gu/?api_key=${API_KEY}/id`)
      .then((response) => {
        console.log(response);
        this.setState({ mainVideo: response.data });
      });
    axios.get(`${API_URL}/videos/?api_key=${API_KEY}`).then((response) => {
      console.log(response);
      this.setState({ sideVideos: response.data });
    });
  }

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

  render() {
    return (
      <div className='App'>
        <Header />
        <Banner mainVideo={this.state.mainVideo} />
        <div className='column__container container'>
          <div className='column__container-left'>
            <div className='column-form-list'>
              <VideoInfo mainVideo={this.state.mainVideo} />
              <CommentForm handleSubmitComment={this.handleSubmitComment} />

              <CommentList comments={this.state.mainVideo.comments} />
            </div>
          </div>
          <div className='column__container-right'>
            <VideoList videos={this.state.sideVideos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
