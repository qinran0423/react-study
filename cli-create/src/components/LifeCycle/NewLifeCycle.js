import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
	state = {
		n: 0
	}


	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps')
		return {
			n: state.n
		}
	}


	getSnapshotBeforeUpdate = (prevProps, prevState) => {
		console.log('getSnapshotBeforeUpdate')
		return 123
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState, snapshot)
	}

	render() {
		return (
			<div>
				<h1>New Life Cycle</h1>
				<h1>{this.state.n}</h1>
				<p>
					<button onClick={() => {
						this.setState({ n: this.state.n + 1 })
					}}>n + 1</button>
				</p>
			</div>
		)
	}
}
