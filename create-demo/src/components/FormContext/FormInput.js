import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './context'
export default class FormInput extends Component {
	static contextType = ctx
	static defaultProps = {
		type: 'text'
	}

	static propTypes = {
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired
	}



	render() {
		return (
			<div>
				<input
					type={this.props.type}
					value={this.context.formData[this.props.name] || ''}
					onChange={(e) => {
						this.context.changeFormData(this.props.name, e.target.value)
					}}
				/>
			</div>
		)
	}
}
