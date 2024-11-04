import React, { useRef, useState } from 'react'

window.arr = []

export default function TestUseRef() {
	const ref = useRef()
	window.arr.push(ref)
	const [n, setN] = useState(0)

	return (
		<div>
			<input type="number" ref={ref} onChange={(e) => {
				console.log(ref.current.value)
			}} />

			<input type="number"
				value={n}
				onChange={e => {
					setN(e.target.value)
				}} />

		</div>
	)
}
