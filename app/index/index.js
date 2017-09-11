import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../componts/header/header.jsx';
import Search from '../componts/search/search.jsx';
import Otherapp from '../componts/otherapp/otherapp.jsx';
import Spike from '../componts/spike/spike.jsx';
import Like from '../componts/like/like.jsx';
// import Header from '../componts/test.jsx';
ReactDOM.render(
  <div>
    <Search/>
    <Header/>
    <Otherapp/>
    <Spike/>
    <Like/>
  </div>,
  document.getElementById('example')
);
