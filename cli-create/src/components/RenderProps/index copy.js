import React, { Component } from 'react'
import MovablePanel from './MovablePanel'
import ShowMousePoint from './ShowMousePoint'
import MouseListener from './MouseListener'
export default class Test extends Component {

	renderPoint = mouse => <>
		<h2>
			鼠标x：{parseInt(mouse.x)}，
			鼠标y：{parseInt(mouse.y)}
		</h2>
	</>


	renderMove = mouse => <>
		<div style={{
			width: 100,
			height: 100,
			background: '#f66',
			position: 'absolute',
			left: mouse.x - 50,
			top: mouse.y - 50
		}}></div>
	</>

	render() {
		return (
			<div>
				<MouseListener render={this.renderPoint}>
				</MouseListener>
				<MouseListener render={this.renderMove}>
				</MouseListener>
			</div>
		)
	}
}
