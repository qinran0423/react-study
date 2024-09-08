import React, { PureComponent } from 'react'

export default class ErrorBoundComp extends PureComponent {

	state = {
		hasError: false
	}

	static getDerivedStateFromError(error) {
		console.log("发生错误了", error);
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}


	componentDidCatch(error, info) {
		// You can also log the error to an error reporting service
		console.log("componentDidCatch", error, info)
	}

	render() {
		if (this.state.hasError) {
			return <h1>出现错误了！</h1>
		}
		return this.props.children
	}
}
