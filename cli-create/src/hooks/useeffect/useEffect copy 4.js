import React, { useState, useEffect } from 'react'
import useAllHeros from '../myHooks/useAllHeros'
export default function App() {
	const [n, setN] = useState(10)

	const allHeros = useAllHeros()
	console.log(allHeros)
	useEffect(() => {
		console.log('effect')
		if (n === 0) {
			return
		}
		setTimeout(() => {
			setN(n - 1)
		}, 1000);
	}, [n])
	return (
		<div>
			<h1>{n}</h1>
			<button onClick={() => {
				setN(n + 1);
			}}>n+1</button>
		</div>
	)
}

