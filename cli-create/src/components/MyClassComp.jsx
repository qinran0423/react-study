import React, { Component } from 'react'

export default class MyClassComp extends Component {
	render() {
		console.log(this.props)
		// if(this.props.obj) {
		// 	return (
		// 		<>
		// 			<p>
		// 				姓名：{this.props.obj.name}
		// 			</p>
		// 			<p>
		// 				年龄：{this.props.obj.age}
		// 			</p>
		// 		</>
		// 	)
		// } else 
		if(this.props.ui) {
			return this.props.ui
		}
		return <h1>类组件内容：{this.props.num}</h1>

	}

}