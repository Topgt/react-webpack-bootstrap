import React from 'react';
import like from './like.css';

let dataBase = [{
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like1.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 99,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}, {
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like10.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 199,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}, {
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like2.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 120,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}, {
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like3.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 909,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}, {
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like4.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 969,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}, {
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like5.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 89,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}, {
  desc: '苹果原装数据线iPhone6s/6Plus/5SE/iPadpro/4 USB头线充电器 lighting数据线',
  icon: 'http://localhost:3000/images/like/like6.jpg',
  more: 'http://m.jd.com/index/lookSimilar.action?wid=1962981185',
  price: 57,
  url: 'http://mercury.jd.com/log.gif?t=rec.621017&v=src=rec$action=1$reqsig=587d7faebebd1b39a72f6a4585dc53b4d2712232$enb=1$sku=0$p=621017$pin=$uuid=afc6b5fc22f06d60cf1d80dae754de38$csku=1962981185$index=1$st=0$adcli=$expid=104$im=&rid=5429717235485556179&ver=1&sig=d4e215d315c40777940a4df589e2c960670c396f'
}];
let Like = React.createClass({
  getInitialState: function(){
    return {source: []};
  },
  componentDidMount: function(){
    if(dataBase){
      if(this.isMounted){
        this.setState({source: dataBase});
      }
    }
  },
  render: function(){
    let k = 0;
    return (
      <div id="like" className={like.like}>
        <p>猜你喜欢</p>
        <ul>
          {
            this.state.source.map((data)=>{
              return (
                <li className={like.item} key={k++}>
                  <a>
                    <img src={data.icon} />
                    <span>{data.desc}</span>
                    <div className={like.price}>
                      <div>
                        <span>¥</span>
                        <span>{data.price}</span>
                        <span>51人付款</span>
                      </div>
                      <div>...</div>
                    </div>
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

module.exports = Like;
