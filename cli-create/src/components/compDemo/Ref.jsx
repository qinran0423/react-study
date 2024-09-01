import React, { Component } from 'react'

export default class Ref extends Component {
	constructor(props) {
		super(props)
		this.txt = React.createRef()
	}

	handlerClick = () => {
		console.log(this.txt.focus())
		this.setState({})
	}

	getRef = (el) => {
		console.log('getRef', el)
		this.txt = el
	}

	render() {
		return (
			<div>
				<input type="text"  ref={this.getRef}/>
				<button onClick={this.handlerClick}>聚焦</button>
			</div>
		)
	}
}
