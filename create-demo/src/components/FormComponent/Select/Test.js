import React, { Component } from 'react'
import Select from './index'

export default class Test extends Component {
	state = {
		datas: [{
			value: 'basketBall',
			name: '篮球'
		}, {
			value: 'football',
			name: '足球'
		}, {
			value: 'tennis',
			name: '网球'
		}, {
			value: 'volleyball',
			name: '排球'
		}],
		value: 'basketBall'
	}
	render() {
		return (
			<div>
				<Select
					name="Lover"
					datas={this.state.datas}
					value={this.state.value}
					onChange={(value) => {
						this.setState({ value })
					}}
				/>
			</div>
		)
	}
}
