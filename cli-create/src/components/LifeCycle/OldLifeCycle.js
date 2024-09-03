import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			n: 0
		}
		console.log('一个新的组件诞生了')
	}

	UNSAFE_componentWillMount() {
		console.log('componentWillMount 即将挂载')
		this.setState({
			n: 10
		})
	}

	componentDidMount() {
		console.log('componentDidMount 已经挂载')
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps 即将接收到新的props', this.props, nextProps)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate 是否需要更新', this.props, nextProps, this.state, nextState)
		if (this.props.n === nextProps.n && this.state.n === nextState.n) {
			return false
		}
		return true
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate 即将更新', this.props, nextProps, this.state, nextState)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate 已经更新', this.props, prevProps, this.state, prevState)
	}

	componentWillUnmount() {
		console.log('componentWillUnmount 即将卸载')
	}

	render() {
		console.log('render渲染', '返回的React元素会被挂载到虚拟DOM树中')
		return (
			<div>
				<h1>旧版生命周期组件</h1>
				<h2>属性n: {this.props.n}</h2>
				<h2>状态n: {this.state.n}</h2>
				<button onClick={() => {
					this.setState({
						n: this.state.n + 1
					})
				}}>状态 + 1</button>
			</div>
		)
	}
}
