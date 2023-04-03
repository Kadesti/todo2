// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './Data/store'
import { Reset } from 'styled-reset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Reset />
    <App />
  </Provider>
  // </React.StrictMode>
);

