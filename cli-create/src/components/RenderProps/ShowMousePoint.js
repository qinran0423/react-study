import React, { Component } from 'react'

export default class MovablePanel extends Component {
	state = {
		x: 0,
		y: 0
	}

	divRef = React.createRef()

	handleMouseMove = (e) => {
		const { left, top } = this.divRef.current.getBoundingClientRect()
		const x = e.clientX - left
		const y = e.clientY - top

		this.setState({
			x,
			y
		})

	}

	render() {
		return (
			<div ref={this.divRef} className='point' onMouseMove={this.handleMouseMove}>
				<h2>
					鼠标x：{parseInt(this.state.x)}，
					鼠标y：{parseInt(this.state.y)}
				</h2>
			</div>
		)
	}
}
