import Normalize from 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/App';

const store = createStore(
  reducers,
  {},
  applyMiddleware()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter className="Normalize container-fluid">
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
