// 父组件传值给子组件
// 子组件改变父组件的数据
import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './learn.css'

let styleDom = {
  background: "red"
}
let childComStyle = {
  background: 'yellow'
}
class ChildComp extends React.Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      childStr: '子组件中的数据',
    }
  }
  render() {
    return (
      <div style={childComStyle}>
        我是一个子组件
        <p>{this.state.childStr}</p>
        <p>父组件传过来的值：{this.props.fatherStr}</p>
        <button onClick={this.changeFatherData}>改变父元素的值</button>
      </div>
    )
  } 
  changeFatherData= ()=> {
    this.props.changeFatherData();
  }
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
    
  }
  
  render() {
    return(
      
      <div>
        <h1>当前的时间是{this.state.time}</h1>
        <button onClick={this.changeShowInfo}>
          切换视图状态
        </button>
        <p>{this.state.showInfo}</p>
        <ChildComp fatherStr={this.state.showInfo} changeFatherData={this.changeShowInfo}/>
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
