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
      time : new Date().toLocaleTimeString()
    }
  }
  
  render() {
    return(
      
      <div>
        <h1>当前的时间是{this.state.time}</h1>
      </div>
    )
  }
  // 生命周期函数 
  // 组件渲染完成时的函数 
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time : new Date().toLocaleTimeString()
      })
    }, 1000);
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
