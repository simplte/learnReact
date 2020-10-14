import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './learn.css'
let time = new Date().toLocaleTimeString();
let str = '时间：';
let styleDom = {
  background: "red"
}
let styleDom2 = ['borders','h1bg'].join(" ")

let el = (
  <div style={styleDom}>
    你好世界
    <h1 className="borders">
      {str+time}
    </h1>
    {/*  */}
    {/* 这是注释 */}
    <h1 className={styleDom2}>
      {str+time}
    </h1>
    
  </div>
)
ReactDOM.render(
  el,
  document.getElementById('root')
)
