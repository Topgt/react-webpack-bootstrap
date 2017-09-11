var React = require('react');
var ProductBox = React.createClass({
  render: function () {
    return (
      <ul className="nav nav-pills">
        <li role="presentation" className="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
    );
  }
});

module.exports = ProductBox;

// require('../lib/swiper.min.css');
// let Swiper = require('../lib/swiper.min.js');
// let data = {
//   data: [
//     'http://localhost:3000/images/swiper/2.jpg',
//     'http://localhost:3000/images/swiper/1.jpg'
//   ]
// };
