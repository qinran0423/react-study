import React, { Component } from 'react'
import PropTypes from 'prop-types'
const types = {
	a: PropTypes.number,
	b: PropTypes.string,
	onChange: PropTypes.func,
}

class ChildA extends Component {
	static contextTypes = types;

	static childContextTypes = {
		a: PropTypes.number,
		c: PropTypes.string,
	}


	getChildContext() {
		return {
			a: 333,
			c: 'world',
		}
	}

	render() {
		return (
			<div>
				<h1>ChildA</h1>
				<h2>a:{this.context.a}，b:{this.context.b}</h2>
				<ChildB />
			</div>
		)
	}
}



class ChildB extends Component {

	static contextTypes = {
		...types,
		c: PropTypes.string,
	}

	render() {
		console.log(this.context)
		return (
			<p>
				ChildB
				a: {this.context.a}
				b: {this.context.b}
				c: {this.context.c}
				<button onClick={() => {
					this.context.onChange(this.context.a + 2)
				}}>子组件的按钮，a+2</button>
			</p>
		)

	}

}



export default class ContextDemo extends Component {
	static childContextTypes = types
	state = {
		a: 1,
		b: 'hello',
	}
	getChildContext() {
		return {
			a: this.state.a,
			b: this.state.b,
			onChange: (newA) => {
				this.setState({
					a: newA
				})
			}
		}

	}
	render() {
		return (
			<div>
				<ChildA />
				<button onClick={() => {
					this.setState({
						a: this.state.a + 1
					})
				}}>a +1</button>
			</div>
		)
	}
}
