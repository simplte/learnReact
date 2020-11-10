import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import ButtonTest from './components/button';
import FloatTest from './components/float';
import './learn.css';

function LoginCom(props) {
	console.log(props);
	if (props.location.state.loginState == 'success') {
		return <Redirect to="/admin/ButtonTest" />;
	} else {
		return (
			<div>
				<Redirect to="/admin/Message/没登录哦" />
			</div>
		);
	}

}
const pathObj = {
	pathname: '/admin/FloatTest', // 跳转路径
	search: 'username=bqc', // get请求参数
	hash: '#123', // 设置的hash值 前三个参数都会被拼接起来
	state: {
		//参数都放在这里
		msg: '你好别生气'
	}
};
class App extends React.Component {
	render() {
		return (
			<div id="app">
				{/* <Router>
					<Route path="/" exact component={()=> {return (<div>首页1</div>)}}></Route>
					<Route path="/ButtonTest" exact component={()=> {return (<div>按钮测试</div>)}}></Route>
					<Route path="/FloatTest" exact component={()=> {return (<div>复层测试 </div>)}}></Route>
				</Router> */}
				{/* 基础路由路径 
					exact 是精确匹配的标识符 实测没有卵用
				*/}
				<Router>
					<div>
						<Link className="tab" to="/index">
							首页
						</Link>
						<Link className="tab" to="/admin">
							about
						</Link>
						<Link className="tab" to="/admin/ButtonTest">
							ButtonTest
						</Link>
						<Link className="tab" to={pathObj}>
							FloatTest
						</Link>
						<Link className="tab" to="/admin/Message/123" replace>
							Message
						</Link>
					</div>
					{/* Switch 匹配到相同path后就不会往后匹配相同路劲的组件 */}
					<Switch>
						<Route path="/index" exact component={Index} />
						<Route path="/admin" exact component={About} />
						<Route path="/Inbox" exact component={Inbox} />
						<Route path="/admin/ButtonTest" exact component={ButtonTest} />
						<Route path="/loginCom" exact component={LoginCom} />
						<Route path="/admin/FloatTest" exact component={FloatTest} />
						{/* replace 替换当前页面的路径为设置replace属性的地址 并且在路堆栈中去除掉当前地址 */}
						<Route path="/admin/Message/:id" exact component={Message} />
					</Switch>
				</Router>
			</div>
		);
	}
}

class About extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props)
		if(this.props.location.state && this.props.location.state.test) {
		return <h4>跳转关于页面，测试参数{this.props.location.state.test}</h4>
		}else {
		return <h3>about</h3>;

		}
	}
}
class Index extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		
		return <h3>首页</h3>;
	}
}
class Inbox extends React.Component {
	render() {
		return (
			<div>
				<h3>inbox</h3>
				{this.props.children || 'welcome to your inbox'}
			</div>
		);
	}
}
// 获取动态路由中参数的方法this.props.match.params 中获取
class Message extends React.Component {
	render() {
		const pathObj = {
			pathname: '/loginCom',
			state: {
				loginState: 'success1'
			}
		};
		console.log(this.props);
		return (
			<div>
				<Button>Message {this.props.match.params.id}</Button>
				<Link to={pathObj}>登录了</Link>
				<button onClick={this.clickEvent}>跳转到</button>
			</div>
		);
	}
	clickEvent= () => {
		// 通过js跳转页面 history中有路由相关的方法
		this.props.history.push('/admin',{test:'123'})
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
