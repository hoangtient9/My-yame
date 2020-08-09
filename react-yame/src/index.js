import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import './index.module.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import home from './store/reducer/home';
import search from './store/reducer/search';
import productInfo from './store/reducer/productInfo';
import checkout from './store/reducer/checkout';
import {watchProducts, watchSearch, watchProductInfo, watchCheckout} from './store/sagas/index';

const rootReducer = combineReducers({
  home: home,
  search: search,
  productInfo: productInfo,
  checkout: checkout

});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(watchProducts)
sagaMiddleware.run(watchProductInfo)
sagaMiddleware.run(watchSearch)
sagaMiddleware.run(watchCheckout)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
