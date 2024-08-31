import React, { Component } from 'react'

export default class Input extends Component {
	state = {
		value: ''
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.value} onChange={e => {
					this.setState({ value: e.target.value })
				}} />
				<button onClick={() => {
					console.log(this.state.value)
				}}>点</button>
			</div>
		)
	}
}
