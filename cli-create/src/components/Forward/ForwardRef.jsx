import React, { Component } from 'react'

function A(props, ref) {
	return <h1 ref={ref}>
		组件A {props.words}
	</h1>
}

const NewA = React.forwardRef(A)

export default class ForwardRef extends Component {
	ARef = React.createRef()
	componentDidMount() {
		console.log(this.ARef)
	}
	render() {
		return (
			<div>
				<NewA ref={this.ARef} words="heihei"/>
			</div>
		)
	}
}
