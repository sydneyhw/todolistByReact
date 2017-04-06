/*
 * @Author: Sydney
 * @Date:   2017-04-06 14:34:25
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-04-06 16:30:45
 */


import React from 'react';
class TodoFooter extends React.Component {
	SelectAllHandler(e) {
		this.props.selectAll(e.target.checked);
	}
	DeleteDoneHandler() {
		this.props.clearDone();
	}
	render() {
		return (
			<div className="todo-footer">
			<label>
				<input type="checkbox" checked={this.props.isAllChecked} onChange={this.SelectAllHandler.bind(this)}/>全选
			</label>
			<span><span className="text-success">已完成{this.props.todoDoneCount}</span> / 全部{this.props.todoCount}</span>
            <button className="btn btn-danger" onClick={this.DeleteDoneHandler.bind(this)}>清除已完成任务</button>
			</div>
		)
	}
}
export default TodoFooter;