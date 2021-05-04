import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './Greeting/Greeting';

ReactDOM.render(
  <React.StrictMode>
    <Greeting from='webby' />
  </React.StrictMode>,
  document.getElementById('root')
);
