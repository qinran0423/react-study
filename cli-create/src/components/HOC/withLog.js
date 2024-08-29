import React, { Component } from 'react'


export default function withLog(WrappedComponent) {
	return class LogWrapper extends Component {

		componentDidMount() {
			console.log(`日志：组件${WrappedComponent.name}被创建了！${Date.now()}`);
		}

		componentWillUnmount() {
			console.log(`日志：组件${WrappedComponent.name}被销毁了！${Date.now()}`);
		}


		render() {
			return (
				<>
					<WrappedComponent {...this.props} />
				</>
			)
		}
	}

}