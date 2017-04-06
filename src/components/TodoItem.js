/*
 * @Author: Sydney
 * @Date:   2017-04-06 11:13:45
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-04-06 12:39:08
 */

'use strict';
import React from 'react';
import ReactDom from 'react-dom';
class TodoItem extends React.Component {
	ChangeHandler() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone);
	}
	MouseOverHandler() {
		ReactDom.findDOMNode(this).style.background = '#eee';
		ReactDom.findDOMNode(this.refs.delButton).style.display = 'inline-block';
	}
	MouseOutHandler() {
		ReactDom.findDOMNode(this).style.background = '#fff';
		ReactDom.findDOMNode(this.refs.delButton).style.display = 'none';
	}
	DeleteHandler() {
		this.props.deleteTodo(this.props.index);
	}
	render() {
		let className = this.props.isDone ? 'task-done' : '';
		return (
			<li onMouseOver={this.MouseOverHandler.bind(this)} onMouseOut={this.MouseOutHandler.bind(this)}>
		<label>
		    <input type="checkbox" checked={this.props.isDone} onChange={this.ChangeHandler.bind(this)}/>
			<span className={className}>{this.props.text}</span>
		</label>
		<button ref="delButton" className="btn btn-danger" onClick={this.DeleteHandler.bind(this)}>删除</button>	
		</li>

		)

	}

}

export default TodoItem;