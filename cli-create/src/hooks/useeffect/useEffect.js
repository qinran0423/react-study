import React, { useState, useEffect } from 'react'
import useAllHeros from '../myHooks/useAllHeros'
export default function App() {
	const allHeros = useAllHeros()
	console.log(allHeros)
	return (
		<div>
		</div>
	)
}

