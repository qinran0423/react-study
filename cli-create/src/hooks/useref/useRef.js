import React, { useEffect, useState, useRef } from 'react'



export default function TestUseRef() {

	const [n, setN] = useState(10)
	const nRef = useRef(n)
	useEffect(() => {
		const timer = setInterval(() => {
			nRef.current--
			setN(nRef.current)
			if (nRef.current === 0) {
				clearInterval(timer)
			}
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [])
	return (
		<div>
			{n}
		</div>
	)
}
