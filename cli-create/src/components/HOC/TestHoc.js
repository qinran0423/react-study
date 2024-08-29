import React, { Component } from 'react'

export class A extends Component {
	render() {
		return (
			<div>
				A: {this.props.num}
			</div>
		)
	}
}

export class B extends Component {
	render() {
		return (
			<div>
				B: {this.props.num}
			</div>
		)
	}
}