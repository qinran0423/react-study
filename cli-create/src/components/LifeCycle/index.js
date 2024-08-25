import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class index extends Component {
	state = {
		number: 1,
		show: true
	}
	render() {
		const comp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null
		return (
			<div>
				{comp}
				<p>
					<button onClick={() => {
						this.setState({
							number: this.state.number + 1
						})
					}}>父组件按钮 + 1</button>

					<button onClick={() => {
						this.setState({
							show: !this.state.show
						})
					}} >显示/隐藏</button>
				</p>
			</div>
		)
	}
}
