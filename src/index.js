import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Head1 from './js/1slide';
import Predlagaem from './js/2slide';
import Quote from './js/3slide';
import Quote2 from './js/4slide';
import Last from './js/5slide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head1/>
    <Predlagaem/>
    <Quote/>
    <Quote2/>
    <Last/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
