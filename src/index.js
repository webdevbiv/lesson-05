import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

//! https://youtu.be/f1jB13fK4dI?t=1676

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/lesson-05">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
