import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'
export default class Select extends Component {
	static defaulProps = {
		datas: [],
		value: ""
	}

	static propTypes = {
		datas: types.groupDatas.isRequired,
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}
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
