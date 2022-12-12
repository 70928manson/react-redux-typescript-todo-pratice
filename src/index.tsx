import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//在App調用redux api，拿到store的內容
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

