import React, { Component } from 'react'

export default class RadioBoxGroup extends Component {

	handleChange = e => {
		this.props.onChange && this.props.onChange(e.target.value)
	}

	getRadioBox(e) {
		return this.props.datas.map(it => (
			<label key={it.value}>
				<input
					type="radio"
					name={this.props.name}
					value={it.value}
					checked={this.props.value === it.value}
					onChange={e => {
						this.handleChange(e)
					}} />
				{it.name}
			</label>
		))
	}

	render() {
		const bs = this.getRadioBox()
		return (
			<div>
				{bs}
			</div>
		)
	}
}
