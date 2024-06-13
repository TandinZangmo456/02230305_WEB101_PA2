import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // This is for global styles
import './App.css'; // This imports the App.css file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
