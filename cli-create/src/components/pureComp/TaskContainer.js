import React, { Component } from 'react'
import TaskList from './TaskList'

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
		return (
			<div>
				<TaskList tasks={this.state.tasks} />
			</div>
		)
	}
}
