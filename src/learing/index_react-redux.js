import React, { Component } from 'react'
import PropTypes from 'prop-types'   //类型检查
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// 定义counter组件
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    // const value = this.props.value
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}> +1</button>
      </div>
    )
  }
}
//对Counter组件接受的props进行类型检查
Counter.propTypes = {
  value: PropTypes.number.isRequired,   //要求数字类型，没有提供会警告
  onIncreaseClick: PropTypes.func.isRequired //要求函数类型
}

// Action  
const increaseAction = { type: 'increase' }

// Reducer   基于原有state根据action得到新的state
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// 根据reducer函数通过createStore()创建store
const store = createStore(counter)

//  将state映射到Counter组件的props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

//  将action映射到Counter组件的props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

//  传入上面两个函数参数，将Counter组件变为App组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)