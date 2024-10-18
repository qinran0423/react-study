import React, { useEffect, useState } from 'react'

export default function TestUseEffect() {
	const [n, setN] = useState(10)
	useEffect(() => {
		document.title = n
	})
	return (
		<div>
			<h1>{n}</h1>
			<button onClick={() => {
				setN(n + 1)
			}} >n+1</button>
		</div>
	)
}


