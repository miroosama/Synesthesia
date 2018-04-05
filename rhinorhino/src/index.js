import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
// import thunk from 'redux-thunk'
import circleReducer from './reducers/reducer'
import { BrowserRouter as Router } from 'react-router-dom'
const store = createStore(circleReducer);
ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
