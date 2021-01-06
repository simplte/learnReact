import React from 'react';
import ReactDOM from 'react-dom';

export default class FloatPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                这是浮层组件页面
        <p>{this.props.location.state.msg}</p>
            </div>
        )
    }
}