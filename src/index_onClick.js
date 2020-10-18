// 事件绑定

import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './learn.css'

let styleDom = {
  background: "red"
}
class Clock extends React.Component{
  constructor(props) {
    super(props)
    // 状态数据 数据决定view视图
    this.state = {
      time : new Date().toLocaleTimeString(),
      showInfo: '',
      type: false    }
    
  }
  
  render() {
    return(
      
      <div>
        <h1>当前的时间是{this.state.time}</h1>
        {/* 通过箭头函数确定this指向，同时在箭头函数中调用需要执行的方法，将需要用的参数传入，dom元素的属性及方法都放在e中 */}
        <button  onClick={(e)=>{this.changeShowInfo('方法传的值',e)}}>
          切换视图状态
        </button>
        <p>{this.state.showInfo}</p>
      </div>
    )
  }
  // 生命周期函数 
  // 组件渲染完成时的函数 
  componentDidMount() {
    
  }
  changeShowInfo = (str, e)=> {
    // 默认行为阻止
    e.preventDefault();
    console.log(e)
    console.log(str)
    let {type} = this.state;
      this.setState({
        showInfo:type? '我叫卜前程' : '猜猜是是谁',
        type: !type
      })
  }
}

let el = (
  <div style={styleDom}>
    <Clock />
  </div>
)
ReactDOM.render(
  el,
  document.getElementById('root')
)
