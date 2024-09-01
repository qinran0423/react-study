import React, { Component } from "react"
import Input from './components/FormDemo/Input'
import NumberInput from './components/FormDemo/NumberInput'
import CheckBox from './components/FormDemo/CheckBox'
import FormTest from './components/FormDemo/FormTest'
import Test from './components/Form/Select/Test'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* <Input /> */}
				{/* <NumberInput /> */}
				{/* <CheckBox /> */}
				<Test />
			</div>
		)
	}
}
