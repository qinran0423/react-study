import React, { Component } from 'react'

export default class Input extends Component {
	state = {
		value: ''
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.value} onChange={e => {
					let val = e.target.value
					val = val.replace(/\D/g, '')
					this.setState({ value: val })
				}} />
			</div>
		)
	}
}
