import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../componts/header/header.jsx';
import Search from '../componts/search/search.jsx';
import Otherapp from '../componts/otherapp/otherapp.jsx';
import Spike from '../componts/spike/spike.jsx';
import Like from '../componts/like/like.jsx';

ReactDOM.render(
  <div>
    <Search/>
    <Header url={'http://localhost:3000/test/swiper'}/>
    <Otherapp url={'http://localhost:3000/test/otherapp'}/>
    <Spike url={'http://localhost:3000/test/spike'}/>
    <Like url={'http://localhost:3000/test/like'}/>
  </div>,
  document.getElementById('example')
);
