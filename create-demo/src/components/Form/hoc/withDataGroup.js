import React, { Component } from 'react'
import types from '../../../utils/commonTypes'

export default function withDataGroup(Comp) {
	return class DataGroupWrapper extends Component {
		static defaultProps = {
			datas: [],
		}

		static propTypes = {
			datas: types.groupDatas
		}
		render() {
			const comps = this.props.datas.map(data => <Comp key={data.value} info={data} {...this.props} />)
			return (
				<>
					{comps}
				</>
			)
		}
	}
}
