import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import circleReducer from './reducers/reducer'
import shapeTimeReducer from './reducers/shapeTimeReducer'
import foodToPlace from './reducers/foodToPlace'
import { BrowserRouter as Router } from 'react-router-dom'
import userReducer from './reducers/userReducer'
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({color: circleReducer, foodPlaces: foodToPlace, shapeTime: shapeTimeReducer, user: userReducer})

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
