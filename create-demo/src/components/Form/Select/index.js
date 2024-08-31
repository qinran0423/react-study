import React, { Component } from 'react'

export default class Select extends Component {

	handleChange = e => {
		this.props.onChange && this.props.onChange(e.target.value)
	}

	getOptions(e) {
		return this.props.datas.map(it => (
			<option value={it.value} key={it.value}>{it.name}</option>
		))
	}

	render() {
		const option = this.getOptions()
		return (
			<select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
				{option}
			</select>
		)
	}
}
