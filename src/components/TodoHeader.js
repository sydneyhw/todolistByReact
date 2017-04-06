/*
 * @Author: Sydney
 * @Date:   2017-04-04 21:49:29
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-04-06 12:21:04
 */

'use strict';
import React from 'react';
import ReactDom from 'react-dom';
class TodoHeader extends React.Component {
	handlerKeyUp(e) {
		if (e.keyCode == 13) {
			let value = e.target.value;
			if (!value) return false;
			let newTodoItem = {
				text: value,
				isDone: false
			};
			e.target.value = ''; //清空输入框
			this.props.addTodo(newTodoItem);
		}
	}
	render() {
		return (
			<div className="todo-header">
			<input onKeyUp={this.handlerKeyUp.bind(this)} type="text" 
			placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		);
	}
}
export default TodoHeader;