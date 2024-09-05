import React, { Component } from 'react'


const ctx = React.createContext()

function ChildA() {
	return (
		<div>
			<ChildB />
			<h2>
				<ctx.Consumer>
					{value => <>ChildA: {value.a}, {value.b}</>}
				</ctx.Consumer>
			</h2>
		</div>)
}




class ChildB extends Component {

	static contextType = ctx

	render() {
		console.log(this.context)
		return (
			<ctx.Consumer>
				{value => (
					<p>
						ChildB
						a: {value.a}
						b: {value.b}

						<button onClick={() => {
							value.onChange(value.a + 2)
						}}>子组件的按钮，a+2</button>
					</p>
				)
				}
			</ctx.Consumer>
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
