import React, { Component } from 'react'
import Model from './Modal'

export default class Test extends Component {
	state = {
		showModal: false
	}

	showModal = () => {
		this.setState({
			showModal: true
		})
	}

	hideModal = () => {
		this.setState({
			showModal: false
		})
	}

	render() {
		return (
			<div>
				{
					this.state.showModal ?
						<Model onClose={this.hideModal}>
							<h1>hello world</h1>
						</Model>
						:
						null
				}
				<button onClick={this.showModal}>显示蒙层</button>
			</div>
		)
	}
}
