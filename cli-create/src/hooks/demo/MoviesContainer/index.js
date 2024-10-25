import React, { useState, useEffect } from 'react'
import { getMovies } from '../services/movies'
import MoviesList from '../moviesList'
import Pager from '../../../components/Pager/Pager'

export default function MoviesContainer() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(0)
	const [limit, setLimit] = useState(10)
	const [total, setTotal] = useState(0)
	const [panelNumber, setPanelNumber] = useState(5)

	useEffect(() => {
		(async () => {
			const data = await getMovies(page, limit)
			console.log(data)
			setMovies(data.movieList)
			setTotal(data.movieTotal)
		})()
	}, [page, limit])

	return (
		<div>
			<MoviesList movies={movies} />
			<Pager
				current={page}
				limit={limit}
				total={total}
				panelNumber={panelNumber}
				onPageChange={newPage => {
					setPage(newPage)
				}}
			/>
			<p>
				每页显示的条数
				<input type="number" value={limit} onChange={e => {
					setLimit(parseInt(e.target.value))
				}} />
			</p>

			<p>
				最多显示的数字页码
				<input type="number" value={panelNumber} onChange={e => {
					setPanelNumber(parseInt(e.target.value))
				}} />
			</p>
		</div>
	)
}