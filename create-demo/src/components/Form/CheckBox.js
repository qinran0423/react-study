import React, { Component } from 'react'

export default class CheckBox extends Component {
	state = {
		loves: ['音乐', '电影', '美食', '旅行', '其他'],
		checkloves: ['音乐', '电影'],
		selVal: 'shanghai'

	}
	render() {
		const { loves, checkloves } = this.state
		const checkboxes = loves.map(it => (
			<label key={it}>
				<input type="checkbox"
					checked={checkloves.includes(it)}
					onChange={e => {
						if (e.target.checked) {
							this.setState({ checkloves: [...checkloves, it] })
						} else {
							this.setState({
								checkloves: checkloves.filter(item => item !== it)
							})
						}

					}}
				/>
				{it}
			</label>))

		return (
			<div>
				{/* {checkboxes} */}
				{/* <button onClick={() => {
					console.log(this.state.checkloves)
				}}>点</button> */}

				<select value={this.state.selVal} onChange={e => {
					this.setState({ selVal: e.target.value })
				}}>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="hangzhou">杭州</option>
				</select>
			</div>
		)
	}
}
