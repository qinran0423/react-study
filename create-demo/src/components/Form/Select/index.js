import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class Option extends Component {
	static propTypes = {
		info: types.singleData.isRequired,
	}
	render() {
		return <option value={this.props.info.value}>{this.props.info.name}</option>

	}
}

const OptGroup = withDataGroup(Option)

export default class Select extends Component {
	static defaulProps = {
		value: ""
	}

	static propTypes = {
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}
	handleChange = e => {
		this.props.onChange && this.props.onChange(e.target.value)
	}

	render() {
		return <select name={this.name} value={this.props.value} onChange={this.handleChange}>
			<OptGroup {...this.props} ></OptGroup>
		</select>

	}
}
