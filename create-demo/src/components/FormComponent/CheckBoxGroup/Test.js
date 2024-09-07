import React, { Component } from 'react'
import CheckBoxGroup from './index'

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
		chooseDatas: ['basketBall', 'football']
	}
	render() {
		return (
			<div>
				<CheckBoxGroup
					name="Lover"
					datas={this.state.datas}
					chooseDatas={this.state.chooseDatas}
					onChange={(chooseDatas) => {
						this.setState({ chooseDatas })
					}}
				/>
			</div>
		)
	}
}
