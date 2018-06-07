import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

ReactDOM.render(
  <BrowserRouter className="container-fluid">
    <Route path="/" component={App} />
  </BrowserRouter>
  , document.getElementById('root')
);
