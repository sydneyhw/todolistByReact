/*
 * @Author: Sydney
 * @Date:   2017-04-04 20:28:00
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-04-06 16:34:37
 */
import React from 'react';
import ReactDom from 'react-dom';
import LocalDb from 'localDb';
import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js'

class App extends React.Component {
	constructor() {
		super();
		this.db = new LocalDb('ReactDemo');
		//在构造函数中初始化组件的state
		this.state = {
			todos: this.db.get('todos') || [],
			isAllChecked: false
		};
	}
	allChecked() {
		let isAllChecked = false;
		if (this.state.todos.every(todo => todo.isDone)) {
			isAllChecked = true;
		}
		this.setState({
			todos: this.state.todos,
			isAllChecked: isAllChecked
		});
	}
	addTodo(todoItem) {
		this.state.todos.push(todoItem);
		this.db.set('todos', this.state.todos);
		// this.setState({
		// 	todos: this.state.todos
		// });
		this.allChecked();
	}
	deleteTodo(index) {
		this.state.todos.splice(index, 1);
		this.setState({
			todos: this.state.todos
		});
		this.db.set('todos', this.state.todos);
	}
	changeTodoState(index, isDone) {
		this.state.todos[index].isDone = isDone;
		this.allChecked();
		this.db.set('todos', this.state.todos);
	}
	selectAll(allDone) {
		this.state.todos.map((todo) => {
			todo.isDone = allDone;
			return todo;
		});
		this.setState({
			todos: this.state.todos,
			isAllChecked: allDone
		})
		this.db.set('todos', this.state.todos);
	}
	clearDone() {
		let todos = this.state.todos.filter((todo) => !todo.isDone);
		this.setState({
			todos: todos,
			isAllChecked: false
		});
		this.db.set('todos', todos);
	}


	render() {
		let info = {
			isAllChecked: this.state.isAllChecked,
			todoCount: this.state.todos.length || 0,
			todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
		};
		return (
			<div className='todo-wrap'>
			<TodoHeader addTodo={this.addTodo.bind(this)}/>
			<TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}/>
			<TodoFooter {...info} selectAll={this.selectAll.bind(this)} clearDone={this.clearDone.bind(this)}/>	
			</div>
		);
	}
}
ReactDom.render(<App/>, document.getElementById('app'));