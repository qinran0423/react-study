import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'

export default class CheckBoxGroup extends Component {
	static defaultProps = {
		datas: [],
		chooseDatas: [],
	}

	static propTypes = {
		datas: types.groupDatas.isRequired,
		chooseDatas: types.chooseDatas,
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func,
	}



	handleChange = e => {
		let newarr = []
		if (e.target.checked) {
			newarr = [...this.props.chooseDatas, e.target.value]
		} else {
			newarr = this.props.chooseDatas.filter(item => item !== e.target.value)
		}

		this.props.onChange && this.props.onChange(newarr)
	}


	getCheckboxes(e) {
		return this.props.datas.map(it => (
			<label key={it.value}>
				<input
					type="checkbox"
					name={this.props.name}
					value={it.value}
					checked={this.props.chooseDatas.includes(it.value)}
					onChange={e => {
						this.handleChange(e)
					}} />
				{it.name}
			</label>
		))
	}

	render() {
		const bs = this.getCheckboxes()
		return (
			<div>
				{bs}
			</div>
		)
	}
}
