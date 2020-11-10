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
      type: false
    }
    this.changeShowInfo = this.changeShowInfo.bind(this)
  }
  
  render() {
    return(
      
      <div>
        <h1>当前的时间是{this.state.time}</h1>
        <button onClick={this.changeShowInfo}>
          切换视图状态
        </button>
        <p>{this.state.showInfo}</p>
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
  changeShowInfo = ()=> {
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
