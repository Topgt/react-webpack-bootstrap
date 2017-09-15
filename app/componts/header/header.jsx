import React from 'react';
let {img} = require('./header.css');
let $ = require('jquery');
// let data = {
//   data: [
//     'http://localhost:3000/images/swiper/2.jpg',
//     'http://localhost:3000/images/swiper/1.jpg'
//   ]
// };

let Header = React.createClass({
  getInitialState: function(){
    return {imgUrls: []};
  },
  componentDidMount: function(){
    fetch(this.props.url)
      .then(
        response=>response.json()
      )
      .then(
        respData=>{
          if(200 === respData.status){
            if(this.isMounted){
              this.setState({imgUrls: respData.data.icon});
              this.touch();
            }
          }
        }
      );
  },
  touch : function() {
    var carousel = this.refs.Carousel;
    var startX = 0;
    var moveX = 0;
    var distance = 0;
    //绑定触屏事件
    carousel.addEventListener('touchstart', function(e) {
      //记录触屏开始的数据
      startX = e.targetTouches[0].clientX;
    });
    carousel.addEventListener('touchmove', function(e) {
      //记录触屏开始的数据
      moveX = e.targetTouches[0].clientX;
      distance = moveX - startX;
    });
    //绑定触屏结束事件
    carousel.addEventListener('touchend', function() {
      if (distance > 0) {
        $(this).carousel('prev');
      }
      if (distance < 0) {
        $(this).carousel('next');
      }
      //数据重置
      startX = 0;
      moveX = 0;
      distance = 0;
    });
  },
  render: function() {
    let [i,j] = [-1,-1];
    let time = new Date().getTime();
    let margin = {
      margin: '0 10px'
    };
    return (
      <div id={time+'Carousel'} ref="Carousel" className="carousel slide">
        <ol className="carousel-indicators">
          {
            this.state.imgUrls.map(()=>{
              j+=1;
              return (
                <li data-target={'#'+time+'Carousel'} data-slide-to={j} className={!j && 'active' || ''} key={j} style={margin}></li>
              );
            })
          }
        </ol>
        <div className="carousel-inner">
          {
            this.state.imgUrls.map(url=>{
              i+=1;
              return (
                <div className={'item '+ (!i && 'active' || '')} key={i}>
                  <img className={img} src={url} alt="First slide"></img>
                  <div className="carousel-caption">标题 1</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
});

module.exports = Header;
