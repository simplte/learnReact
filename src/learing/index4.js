import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './learn.css'

let styleDom = {
  background: "red"
}
// 函数式组件
function FuncComponent(props) {
  let name = 'bqc';
  let age = <p>今年我 {props.age} </p>
  let isBoy =  props.sex ? '男孩':'女孩'
  return (
      <div>
        <p>我叫{name}</p>
        {age}
        <p>我是一个{isBoy}</p>
      </div>
  )
}
// 类组件动态组件 可以实现交互
class XIAOJIEJIE extends React.Component {
  render() {
  console.log(this)

    return(
      <div>
        {FuncComponent({age:this.props.age,sex: this.props.sex} )}
        <FuncComponent age={this.props.age} sex={this.props.sex} />
        <h1>特长:{this.props.skills}</h1>
      </div>
    )
  }
}
const info = {
  age: 13,
  sex:0,
  skills: '柔氏按摩'
}
let el = (
  <div style={styleDom}>
    <XIAOJIEJIE age={info.age} sex={info.sex} skills={info.skills}/>
  </div>
)
ReactDOM.render(
  el,
  document.getElementById('root')
)
