import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

import { Provider } from 'react-redux';
import { saveState } from './browser-storage';
import { debounce } from 'debounce';
import { ORDER_KEY } from './constants';

import './index.css';

store.subscribe(
  debounce(() => {
    saveState(store.getState().order, ORDER_KEY);
  }, 800)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App useMockedData />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

