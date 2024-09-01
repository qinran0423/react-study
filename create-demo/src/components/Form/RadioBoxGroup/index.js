import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class RadioBox extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		info: types.singleData.isRequired,
		onChange: PropTypes.func,
		value: PropTypes.string.isRequired,
	}

	handleChange = e => {
		this.props.onChange && this.props.onChange(e.target.value)
	}

	render() {
		return (
			<label>
				<input
					type="radio"
					name={this.props.name}
					value={this.props.info.value}
					checked={this.props.value === this.props.info.value}
					onChange={e => {
						this.handleChange(e)
					}} />
				{this.props.info.name}
			</label>
		)
	}
}

export default withDataGroup(RadioBox)