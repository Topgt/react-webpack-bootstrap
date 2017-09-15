import React from 'react';
import spike from './spike.css';
/*let dataBase = [
  {
    icon: 'http://localhost:3000/images/spike/spike1.jpg',
    price: 399,
    sprice: 299,
    url: 'http://ms.m.jd.com/seckill/seckillList?wareId=2537829'
  }, {
    icon: 'http://localhost:3000/images/spike/spike2.jpg',
    price: 4999,
    sprice: 3999,
    url: 'http://ms.m.jd.com/seckill/seckillList?wareId=2537829'
  }, {
    icon: 'http://localhost:3000/images/spike/spike3.jpg',
    price: 1299,
    sprice: 1099,
    url: 'http://ms.m.jd.com/seckill/seckillList?wareId=2537829'
  }
];*/
var formatTime = function(time) {
  var [h,m,s] = [0, 0, 0];
  if (time / 3600 > 1) {
    h = parseInt(time / 3600);
    time -= 3600 * h;
  }
  if (time / 60 > 1) {
    m = parseInt(time / 60);
    time -= 60 * m;
  }
  s = time;
  h = h/10<1 && '0'+ h || ''+ h;
  m = m/10<1 && '0'+m || ''+ m;
  s = s/10<1 && '0'+ s || ''+ s;
  return {h, m, s};
};
let Spike = React.createClass({
  getInitialState: function() {
    return {data: {store:[]}, icon: [], time:{h:'00',m:'00',s:'00'}};
  },
  componentDidMount: function(){
    fetch(this.props.url)
      .then(
        response=>response.json()
      )
      .then(
        respData=>{
          // console.log(respData);
          if(200 === respData.status){
            if(this.isMounted){
              this.setState({
                data: respData.data.data,
                icon: respData.data.icon
              });

              let times = respData.data.data.times;
              let setItv = setInterval(
                ()=>{
                  this.setState({time: formatTime(times--)});
                  -1===times && clearInterval(setItv);
                },1000
              );
            }
          }
        }
      );
  },
  render: function() {
    let i =0;
    let timeSty = {
      'margin': '0 6px',
      'padding': '3px 2px',
      'backgroundColor': '#3d3d3d',
      'color': 'white'
    };
    return (
      <div id="spike" className={spike.spike}>
        <div className={spike.head}>
          <div className={spike.left}>
            <span className="glyphicon glyphicon-time"></span>
            <span>掌上时间</span>
            <span className={spike.time}>
              <span style={timeSty}>{this.state.time.h}</span>
              <span style={timeSty}>{this.state.time.m}</span>
              <span style={timeSty}>{this.state.time.s}</span>
            </span>
          </div>
          <div>
            <a>更多秒杀&gt;</a>
          </div>
        </div>
        <div className={spike.content}>
          <ul>
            {
              this.state.data.store.map((app,index)=>{
                return (
                  <li key={i++}>
                    <a href={app.url}>
                      <div>
                        <img src={this.state.icon[index]} />
                      </div>
                      <p>¥{app.sprice}</p>
                      <p>¥{app.price}</p>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Spike;
