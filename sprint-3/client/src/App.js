import React, { Component } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
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
  //Defining State variables
  state = {
    sideVideos: [],
    mainVideo: {},
    videoDetails: {},
  };
  //Defining the componentDidMount life cycle methos
  componentDidMount() {
    // sessionStorage.setItem('defaultSearch', 'id');
    this.getActiveVideoData('1af0jruup5gu');
    this.getVideoArrData();
  }
  //Setting up Axios get active Videos for mainVideo Object
  getActiveVideoData(vidID) {
    axios
      .get(`${VIDEO_URL}/videos/${vidID}?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response);
        this.setState({ mainVideo: response.data });
      })
      .catch((err) => console.log(err));
  }
  //Setting up Axios Video Array for sidebar Videos
  getVideoArrData() {
    axios
      .get(`${API_URL}/videos/?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response);
        this.setState({ sideVideos: response.data });
      })
      .catch((err) => console.log(err));
  }
  //Checking to see if components updated and calling getActiveVideoData
  //when successful
  componentDidUpdate(_prevProps, prevState) {
    console.log('App component updated');
    const { params } = this.props.match;
    console.log(params.id);
    if (params.id !== undefined && prevState.mainVideo.id !== params.id) {
      this.getActiveVideoData(params.id);
    }
  }

  //tracking to signal when components are finished their work.
  componentWillMount() {
    console.log('App component has unmounted');
  }

  // I was going to try to add some more functionality to my app
  // but ran out of time on the weekend.
  handleSubmitComment = (event) => {
    event.preventDefault();

    //   const id = uuidv4();
    //   const comment = event.target.comment.value;
    //   const time = { timestamp: 1545162149000 };
    alert('This function is working but not wired up right now');
    //   this.setState({
    //     comments: [...this.state.comments, { id, time, comment }],
    //   });
    event.target.reset();
  };

  render() {
    return (
      //tracking state and passing props to child components

      <div className='App'>
        {/* Calling banner component and passing state props for main video component*/}
        <Banner mainVideo={this.state.mainVideo} />
        <div className='column__container container'>
          <div className='column__left'>
            <div className='column__list'>
              {/* Calling VideoInfo component and passing state props for main VideoInfo component*/}
              <VideoInfo mainVideo={this.state.mainVideo} />
              {/* Displaying CommentForm and Passing a Function up to the App Component */}
              <CommentForm handleSubmitComment={this.handleSubmitComment} />
              {/* Displaying CommentList and passing State to the Comments Component */}
              <CommentList comments={this.state.mainVideo.comments} />
            </div>
          </div>
          <div className='column__right'>
            {/* Passing State and props to the SideVideos Component to list the Videos */}
            <VideoList videos={this.state.sideVideos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
