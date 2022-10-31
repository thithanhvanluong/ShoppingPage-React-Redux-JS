import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //NOTE: but if you are using react 18 with react-router-dom-V5,
  // it will not work in react.strictMode, you will have to remove the <React.StrictMode> tag from your index.js or update to V6 of react-router-dom
  //IF NOT, YOU CANNOT ROUTE TO OTHER COMPONENTS WHEN CLICKING LINKS
  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
