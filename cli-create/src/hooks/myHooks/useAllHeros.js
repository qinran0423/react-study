import { useState, useEffect } from 'react'

export default () => {
	const [allHeros, setAllHeros] = useState([])

	useEffect(() => {
		(async () => {
			const response = await fetch('https://study.duyiedu.com/api/herolist')
			const data = await response.json()
			setAllHeros(data.data)
		})()
	}, [])

	return allHeros
}
