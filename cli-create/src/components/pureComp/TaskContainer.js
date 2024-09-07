import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

export default class TaskContainer extends Component {
	state = {
		tasks: []
	}

	componentDidMount() {
		const ts = []
		for (let i = 0; i < 10; i++) {
			ts.push({
				name: `Task ${i}`,
				isFinished: Math.random() < 0.5
			})
		}
		this.setState({ tasks: ts })
	}

	render() {
		console.log('TaskContainer Render, 数组的长度', this.state.tasks.length)
		return (
			<div>
				<AddTask onAdd={newTask => {
					this.setState({ tasks: [...this.state.tasks, newTask] })
				}} />
				<TaskList tasks={this.state.tasks} />
			</div>
		)
	}
}
