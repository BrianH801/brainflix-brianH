import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/video/:id' component={App} exact />
      <Route path='/upload' component={UploadForm} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
