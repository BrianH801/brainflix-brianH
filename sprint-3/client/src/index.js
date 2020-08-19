import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import NotFound from './components/NotFound';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      {/* Setting routes in switch statement to the App Component */}
      <Route path='/' component={App} exact />
      {/* Setting the video id so that the image clicked on will display in the main screen as well as the comments */}
      <Route path='/video/:id' component={App} exact />
      {/* Set the route to the Upload form when the Upload button is selected */}
      <Route path='/upload' component={UploadForm} />
      {/* Set the route for the NotFound component so that if someone enters a different value in the URL the app will give a 404 page not found error */}
      <Route path='/*' component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
