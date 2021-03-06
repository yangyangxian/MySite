import css from './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';
import $ from 'jquery';
window.$ = $;

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/root';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Root></Root>
  </BrowserRouter>,
  document.getElementById('root')
);