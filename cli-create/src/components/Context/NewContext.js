import React, { Component } from 'react'


const ctx = React.createContext()
const ctx2 = React.createContext()

function ChildA() {
	return (
		<ctx2.Provider value={{
			a: 222,
			c: 'hello'
		}}>
			<div>
				<ChildB />
			</div>
		</ctx2.Provider>
	)
}

class ChildB extends Component {

	static contextType = ctx

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('childB shouldComponentUpdate')
		return false
	}

	render() {
		console.log('childB  render ')
		return (
			<h1>
				a: {this.context.a}
				b: {this.context.b}
			</h1>
		)
	}

}



export default class NewContext extends Component {
	state = {
		ctx: {
			a: 1,
			b: 'hello',
			onChange: (newA) => {
				this.setState({
					a: newA
				})
			}
		}
	}
	render() {
		return (
			// <div>
			// 	<ChildB {...this.state} />
			// 	<button onClick={() => {
			// 		this.setState({})
			// 	}}>a +1</button>
			// </div>
			<ctx.Provider value={this.state.ctx}>
				<div>
					NewContext: {this.state.a}
					<ChildB {...this.state} />
					<button onClick={() => {
						this.setState({
						})
					}}>a +1</button>
				</div>
			</ctx.Provider>
		)
	}
}
