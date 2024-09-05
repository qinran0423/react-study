import React, { Component } from 'react'
import PropTypes from 'prop-types'


const ctx = React.createContext()

const types = {
	a: PropTypes.number,
	b: PropTypes.string,
	onChange: PropTypes.func,
}

class ChildA extends Component {
	render() {
		return (
			<div>
				<ChildB />
			</div>
		)
	}
}



class ChildB extends Component {

	static contextType = ctx

	render() {
		console.log(this.context)
		return (
			<p>
				ChildB
				a: {this.context.a}
				b: {this.context.b}

				<button onClick={() => {
					this.context.onChange(this.context.a + 2)
				}}>子组件的按钮，a+2</button>
			</p>
		)

	}

}



export default class NewContext extends Component {
	state = {
		a: 1,
		b: 'hello',
		onChange: (newA) => {
			this.setState({
				a: newA
			})
		}
	}
	render() {
		return (
			<ctx.Provider value={this.state}>
				<div>
					<ChildA />
					<button onClick={() => {
						this.setState({
							a: this.state.a + 1
						})
					}}>a +1</button>
				</div>
			</ctx.Provider>
		)
	}
}
