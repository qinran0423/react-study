import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

export default class TaskList extends Component {
	static propTypes = {
		tasks: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			isFinished: PropTypes.bool.isRequired,
		})).isRequired,
	}
	render() {
		console.log('TaskList Render')
		const ts = this.props.tasks.map((it, i) => <Task
			key={i}
			{...it}
		/>)
		return (
			<div>
				{ts}
			</div>
		)
	}
}
