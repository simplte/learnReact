// 列表循环

import React from 'react';
import ReactDOM from 'react-dom';
// 样式导入
import './learn.css';

let styleDom = {
	background: 'red'
};
function GrilsCompon(props) {
	let seGirls = (_info, event) => {
		alert(`大爷点了${_info.name},使用${_info.skill}服务`);
	};
	let _data = props.data;
	return (
		<div>
			<div
				onClick={(e) => {
					seGirls(_data, e);
				}}
			>
				<span>姓名:{_data.name}=</span>
				<span>技能:{_data.skill}</span>
			</div>
		</div>
	);
}

class GrilsComponDT extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
    let _data = this.props.data;
		return (
			<div
				onClick={(e) => {
					this.seGirls(_data, e);
				}}
			>
				<span>姓名:{_data.name}=</span>
				<span>技能:{_data.skill}</span>
			</div>
		);
  }
  seGirls(_data) {
    alert(`大爷点了${_data.name},使用${_data.skill}服务`);
  }
}
class Clock extends React.Component {
	constructor(props) {
		super(props);
		// 状态数据 数据决定view视图
		this.state = {
			time: new Date().toLocaleTimeString(),
			showInfo: '',
			type: false,
			girlArr: [
				{
					id: 0,
					name: '如花',
					skill: '柔式'
				},
				{
					id: 0,
					name: '小梅',
					skill: '泰式'
				},
				{
					id: 0,
					name: '阿荣',
					skill: '日式'
				}
			]
		};
	}

	render() {
		return (
			<div>
				{/* 直接在根组件中循环 */}

				{/* {this.state.girlArr.map((x, i) => {
					return (
						<div
							key={i}
							onClick={(e) => {
								this.seGirls(x, e);
							}}
						>
							<span>姓名:{x.name}=</span>
							<span>技能:{x.skill}</span>
						</div>
					);
				})} */}

				{/* 使用静态组件的方式循环 */}
				{/* {this.state.girlArr.map((x, i) => {
					return <GrilsCompon data={x} key={i} />;
				})} */}

				{/* 使用动态组件的方式循环 */}
        {
          this.state.girlArr.map((x,i) => {
            return <GrilsComponDT data={x} key={i}></GrilsComponDT>
          })
        }
			</div>
		);
	}
	// 生命周期函数
	// 组件渲染完成时的函数
	componentDidMount() {}
	changeShowInfo = (str, e) => {
		// 默认行为阻止
		e.preventDefault();
		console.log(e);
		console.log(str);
		let { type } = this.state;
		this.setState({
			showInfo: type ? '我叫卜前程' : '猜猜是是谁',
			type: !type
		});
	};
	seGirls(_info, event) {
		alert(`大爷点了${_info.name},使用${_info.skill}服务`);
	}
}

let el = (
	<div style={styleDom}>
		<Clock />
	</div>
);
ReactDOM.render(el, document.getElementById('root'));
