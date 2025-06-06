import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import store from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
    </Provider>
    
);

reportWebVitals();
