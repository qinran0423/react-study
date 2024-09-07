import React, { Component } from 'react'
import { Provider } from './context'
import FormInput from './FormInput'
import FormButton from './FormButton'
import PropTypes from 'prop-types'

export default class Form extends Component {
	state = {
		formData: {},
		changeFormData: (name, value) => {
			this.setState({
				formData: {
					...this.state.formData,
					[name]: value
				}
			})
		},
		submit: () => {
			this.props.onSubmit(this.state.formData)
		}
	}

	static propTypes = {
		onSubmit: PropTypes.func
	}

	render() {
		return (
			<div>
				<Provider value={this.state}>
					{this.props.children}
				</Provider>
			</div>
		)
	}
}

Form.Input = FormInput
Form.Button = FormButton