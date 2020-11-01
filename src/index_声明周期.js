// 列表循环

import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './learn.css';
class Clock extends React.Component {
	constructor(props) {
		super(props);
		// 状态数据 数据决定view视图
		this.state = {
			
		};
	}

	render() {
		return (
			<div>
				<div className="map">
					<div id='map'></div>
				</div>
			</div>
		);
	}
	// 生命周期函数
	// 组件渲染完成时的函数
	UNSAFE_componentWillMount(){
		console.log('组件挂载前')
	}
	componentWillMount() {
		// 移除
		console.log('组件将要渲染')
	}
	componentDidMount() {
		console.log('组件渲染完成')
	}
	UNSAFE_componentWillUpdate() {
		console.log('组件更新后')
	}
	componentWillReceiveProps() {
		console.log('将要接收到props')
	}
	componentWillUpdate(){
		// 移除
		console.log("组件将要更新")
	}
	componentDidUpdate() {
		console.log("组件已经更新")
	}
	componentWillUnmount() {
		console.log('组件将要卸载')
	}
	componentDidCatch() {
		console.log('如果组件抛出错误，就会触发该函数')
	}
}

let el = (
	<div style={styleDom}>
		<Clock />
	</div>
);
ReactDOM.render(el, document.getElementById('root'));
