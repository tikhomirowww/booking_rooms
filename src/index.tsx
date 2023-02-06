import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/login.css'
import './styles/navbar.css'
import './styles/tasks.css'
import './styles/rooms.css'
import './styles/friends.css'
import App from './App';
import { Provider } from "react-redux";
import { store } from './store/store';
// import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({reducer: {
// }})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
