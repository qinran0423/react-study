import React, { Component } from "react"
import Input from './components/Form/Input'
import NumberInput from './components/Form/NumberInput'
import CheckBox from './components/Form/CheckBox'
import FormTest from './components/Form/FormTest'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* <Input /> */}
				{/* <NumberInput /> */}
				{/* <CheckBox /> */}
				<FormTest />
			</div>
		)
	}
}
