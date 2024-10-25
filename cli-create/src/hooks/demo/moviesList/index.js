import React from 'react'

export default function MoviesList({ movies }) {
	const list = movies.map(item => (
		<li key={item._id}>{item.title}</li>
	))
	return (
		<ul>
			{list}
		</ul>
	)
}


