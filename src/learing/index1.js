import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
// jsx语法
//  <App /> js的普通对象

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// 可以改成下面的

// let  app = <App />
// let root = document.getElementById('root');
// 使用jsx的写法可以创建js元素对象，不过只能有一个根元素
// <h1>你好</h1><h1>你好</h1> 这样不行
// <h1>你好<span>123</span></h1> 这样可以
// let h1 = <h1>你好</h1>

// ReactDOM.render(app, root);

// 实现页面时刻的显示
// function clock() {
//   let time = new Date().toLocaleTimeString();
//   let el = (<h1>现在的事件时{time}</h1>)
//   let root = document.getElementById('root');
//   ReactDOM.render(el, root); 
// }
// clock()
// setInterval(
//   clock
// , 1000);

// 函数式组件
function Clock(prop) {
  return (
    <div>
      <h1>现在的时间是{prop.date.toLocaleTimeString()}</h1>
    </div>
  )
}
function run() {
  ReactDOM.render(
    <Clock date={new Date} />,
    document.getElementById('root')
  )
}
run()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
