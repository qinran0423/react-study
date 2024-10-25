

export async function getMovies(page = 1, limit = 10) {
	return await fetch(`/api/movies?page=${page}&size=${limit}`)
		.then(response => response.json())
		.then(data => data.data)
}