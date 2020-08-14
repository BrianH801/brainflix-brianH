import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import NotFound from './components/NotFound';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/video/:id' component={App} exact />
      <Route path='/upload' component={UploadForm} />
      <Route path='/*' component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
