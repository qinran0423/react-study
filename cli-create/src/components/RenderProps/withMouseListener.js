import React, { PureComponent } from 'react'
import './index.css'

export default function withMouseListener(Comp) {
	return class MouseListener extends PureComponent {
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
					<Comp {...this.props} x={this.state.x} y={this.state.y} />
				</div>
			)
		}
	}

}
