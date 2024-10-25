import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerTest extends Component {
	state ={
		current: 2,
		total: 100,
		limit: 9,
		panelNumber: 5
	}

	handlePageChange = (newPage) => {
		this.setState({
			current: newPage
		})
	}

	render() {
		return (
			<div>
				<Pager
					{...this.state}
					onPageChange={this.handlePageChange}
				/>
			</div>
		)
	}

}