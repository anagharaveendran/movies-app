import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/header/Header';
import './index.css';


ReactDOM.render(<BrowserRouter><Header/></BrowserRouter>,document.getElementById('root'));

