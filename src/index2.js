import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './App.css'
let time = new Date().toLocaleTimeString();
let str = '时间：';
let man = false;
const imgURL = "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1602684862&di=a95029fbafb8e1c773a7509a922a1420&src=http://a4.att.hudong.com/43/83/01300000241358124822839175242.jpg"
let el2 = (
  <div>
    支持传入一个新的el元素
  </div>
)
let el = (
  <div>
    你好世界
    <h1>
      {str+time}
    </h1>
    <h1>
      隔离吗？
      {man? '不隔离':'隔离'}
    </h1>
    <h1 className='bg'>
      隔离吗？
      {man? <button>隔离</button>:<button>不隔离</button>}
    </h1>
    <h1>
      混搭
      {el2}
    </h1>
    <img src={imgURL}></img>
  </div>
)
ReactDOM.render(
  el,
  document.getElementById('root')
)
