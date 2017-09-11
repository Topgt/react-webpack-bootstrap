import React from 'react';
import search from './search.css';

let Search = React.createClass({
  getInitialState: function() {
    return {bg:[]};
  },
  componentDidMount: function(){
    let _this = this;
    window.onscroll = () => {
      let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
      let optatic = 0.8 * (realHeight / 142);
      if (optatic <= 0.8) {
        _this.setState({bg: {'backgroundColor':`rgba(234, 44, 44, ${optatic})`}});
      }
    };
  },
  render: function(){
    return (
      <div id="search" className={search.search} style={this.state.bg}>
        <div>
          <i className={search.logo}></i>
        </div>
        <div className={search.ipt}>
          <span className={'glyphicon glyphicon-search '+search.icon}></span>
          <input placeholder="全场畅饮，部分低至99减50" type="text" />
        </div>
        <div>
          <span className={search.login}>登录</span>
        </div>
      </div>
    );
  }
});

module.exports = Search;
