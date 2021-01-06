// 列表循环

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';


const reducer = function(state= {num : 0}, action){
	switch(action.type) {
		case 'add':
			state.num++;
			break;
		case 'reduce':
			state.num--;
			break;
	}
	return {...state};
}
const store = createStore(reducer);

function add() {
	store.dispatch({type:'add'})
}
function reduce() {
	store.dispatch({type:'reduce'})
}



class Clock extends React.Component {
	constructor() {
		super()
	}
	render() {
		const storeData= store.getState();
		return (
			<div>
				{  
					storeData.num
				}
				
				<button onClick={add}>加</button>
				<button onClick={reduce}>加</button>
			</div>
		);
	}
	// 生命周期函数
	// 组件渲染完成时的函数
	
	componentDidMount() {
		console.log('组件渲染完成')
	}
	
}


ReactDOM.render(<Clock />, document.getElementById('root'));
store.subscribe(()=>{
	console.log(store.getState())
	ReactDOM.render(<Clock />, document.getElementById('root'));
})

