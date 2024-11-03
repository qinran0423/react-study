import React, { useState, useCallback } from 'react'



class Test extends React.PureComponent {
	render() {
		console.log('Test render')
		return <div>
			<h1>{this.props.text}</h1>
			<button onClick={this.props.onClick}>change</button>
		</div>
	}

}


export default function TestUseCallback() {
	console.log('Parent render')
	const [txt, setTxt] = useState(123)
	const [n, setN] = useState(0)
	return (
		<div>
			<Test text={txt} onClick={() => {
				setTxt(Math.random())
			}} />
			<input type="number" value={n} onChange={(e) => {
				setN(e.target.value)
			}} />
		</div>
	)
}
