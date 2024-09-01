import React, { Component } from 'react'

class A extends Component {
	render() {
		return <h1 ref={this.props.abc}>
		组件A {this.props.words}
	</h1>
	}
}




const NewA = React.forwardRef((props, ref) => {
	return <A {...props} abc={ref}/>
})

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
