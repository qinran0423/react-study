import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { ObjectEqual } from '../../util'


export default class Task extends PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired,
		isFinished: PropTypes.bool.isRequired,
	}


	render() {
		console.log('Task Render')
		return (
			<li className={this.props.isFinished ? 'finish' : ''}>{this.props.name}</li>
		)
	}
}


// export default class Task extends Component {
// 	static propTypes = {
// 		name: PropTypes.string.isRequired,
// 		isFinished: PropTypes.bool.isRequired,
// 	}

// 	shouldComponentUpdate(nextProps, nextState) {
// 		if (ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)) {
// 			return false
// 		}
// 		return true
// 	}

// 	render() {
// 		console.log('Task Render')
// 		return (
// 			<li className={this.props.isFinished ? 'finish' : ''}>{this.props.name}</li>
// 		)
// 	}
// }
