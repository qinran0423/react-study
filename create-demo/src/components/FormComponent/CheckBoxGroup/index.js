import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class CkeckBox extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		info: types.singleData.isRequired,
		onChange: PropTypes.func,
		chooseDatas: types.chooseDatas,
	}

	handleChange = e => {
		let newArr;
		if (e.target.checked) {
			newArr = [...this.props.chooseDatas, e.target.value];
		}
		else {
			newArr = this.props.chooseDatas.filter(it => it !== e.target.value);
		}
		this.props.onChange && this.props.onChange(newArr);
	}

	render() {
		return (
			<label>
				<input
					type="checkbox"
					name={this.props.name}
					value={this.props.info.value}
					checked={this.props.chooseDatas.includes(this.props.info.value)}
					onChange={e => {
						this.handleChange(e)
					}} />
				{this.props.info.name}
			</label>
		)
	}
}



export default withDataGroup(CkeckBox)