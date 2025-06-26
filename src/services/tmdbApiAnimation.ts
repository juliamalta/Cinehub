import axios from 'axios'

const API_KEY = '28fc232cc001c31e8a031f419d0a14ca'
const BASE_URL = 'https://api.themoviedb.org/3'

export interface Movie {
    id: number
    title: string
    poster_path: string
    release_date: string
}

export const getAnimationMovies = async (): Promise<Movie[]> => {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
            with_genres: '16', // filtro animação
            sort_by: 'popularity.desc',
        },
    })
    return response.data.results
}
