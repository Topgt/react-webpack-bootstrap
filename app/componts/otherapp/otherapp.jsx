import React  from 'react';
import {otherapp} from './otherapp.css';

let dataBase = {
  state: 200,
  data: [{
    icon: 'http://localhost:3000/images/otherapp/app1.png',
    title: '京东超市',
    url: 'http://h5.m.jd.com/active/2hqsQcyM5bEUVSStkN3BwrBHqVLd/index.html?has_native=1'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app2.png',
    title: '全球购',
    url: 'http://jdw.jd.hk/?vs=m'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app3.png',
    title: '充值中心',
    url: 'http://newcz.m.jd.com'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app4.png',
    title: '服装城',
    url: 'http://h5.m.jd.com/active/3GTca2WsjgRdohGtJCUnWB3bDs8o/index.html'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app5.png',
    title: '京东金融',
    url: 'http://h5.m.jd.com/active/2hqsQcyM5bEUVSStkN3BwrBHqVLd/index.html?has_native=1'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app6.png',
    title: '领券',
    url: 'http://coupon.m.jd.com/center/getCouponCenter.action'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app7.png',
    title: '物流查询',
    url: 'http://home.m.jd.com/user/userAllOrderList.action'
  }, {
    icon: 'http://localhost:3000/images/otherapp/app8.png',
    title: '京东超市',
    url: 'http://home.m.jd.com/myJd/myFocus/focusWare.action'
  }]
};
let Otherapp = React.createClass({
  getInitialState: function(){
    return {apps: []};
  },
  componentDidMount: function(){
    if(200 === dataBase.state){
      if(this.isMounted){
        this.setState({
          apps: dataBase.data
        });
      }
    }
  },
  render: function(){
    let i=0;
    return (
      <div id="otherapp" className={otherapp}>
        <ul>
          {
            this.state.apps.map(app=>{
              return (
                <li key={i++}>
                  <a href={app.url}>
                    <img src={app.icon} />
                    <span>{app.title}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Otherapp;
