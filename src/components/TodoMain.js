import React from 'react'
import TodoItem from './TodoItem.js'

class TodoMain extends React.Component {
	render() {
		if (this.props.todos.length == 0) {
			return (
				<div className="todo-empty">目前没有待办项目</div>)
		} else {
			return (
				<ul className="todo-main">
				{
					this.props.todos.map((todo,index)=>{
						return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props}/>
					})
				}
				</ul>
			)
		}
	}
}
export default TodoMain;