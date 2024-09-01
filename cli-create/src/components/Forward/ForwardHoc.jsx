import React, { Component } from 'react'
import withLog from '../HOC/withLog'

class A extends Component {
	render() {
		return <h1 ref={this.props.abc}>
		组件A {this.props.words}
	</h1>
	}
}

const NewA = withLog(A)


export default class ForwardRef extends Component {
	ARef = React.createRef()
	componentDidMount() {
		console.log(this.ARef)
	}
	render() {
		return (
			<div>
				<NewA ref={this.ARef} words="hhhhhh"/>
			</div>
		)
	}
}
