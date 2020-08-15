import React, { Component } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Header from './components/Header';
import VideoList from './components/VideoList/VideoList';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList/CommentList';
import VideoInfo from './components/VideoInfo';
import { API_KEY } from './env/env_variables';
import './styles/main.css';

//?apiKey=${API_KEY}
const API_URL = `https://project-2-api.herokuapp.com`;
const VIDEO_URL = `https://project-2-api.herokuapp.com`;

class App extends Component {
  state = {
    sideVideos: [],
    mainVideo: {},
    comments: [],
    videoDetails: {},
  };

  componentDidMount() {
    // sessionStorage.setItem('defaultSearch', 'id');
    this.getActiveVideoData('1af0jruup5gu');
    this.getVideoArrData();
  }

  getActiveVideoData(vidID) {
    axios
      .get(`${VIDEO_URL}/videos/${vidID}?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response);
        this.setState({ mainVideo: response.data });
      })
      .catch((err) => console.log(err));
  }

  getVideoArrData() {
    axios
      .get(`${API_URL}/videos/?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response);
        this.setState({ sideVideos: response.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(_prevProps, prevState) {
    console.log('App component updated');
    const { params } = this.props.match;
    console.log(params.id);
    // if (params.id !== undefined) {
    //   console.log(params.id);
    // }
    if (params.id !== undefined && prevState.mainVideo.id !== params.id) {
      this.getActiveVideoData(params.id);
    }
  }
  componentWillMount() {
    console.log('App component has unmounted');
  }
  //  handleSubmitComment = (event) => {
  //   event.preventDefault();

  //   const id = uuidv4();
  //   const comment = event.target.comment.value;
  //   const time = Date.now();

  //   this.setState({
  //     comments: [...this.state.comments, { id, time, comment }],
  //   });
  //   event.target.reset();
  // };

  render() {
    return (
      <div className='App'>
        <Header />
        <Banner mainVideo={this.state.mainVideo} />
        <div className='column__container container'>
          <div className='column__left'>
            <div className='column__list'>
              <VideoInfo mainVideo={this.state.mainVideo} />
              <CommentForm handleSubmitComment={this.handleSubmitComment} />
              <CommentList comments={this.state.mainVideo.comments} />
            </div>
          </div>
          <div className='column__right'>
            <VideoList videos={this.state.sideVideos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
