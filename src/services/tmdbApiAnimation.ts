import axios from 'axios'

const API_KEY = '28fc232cc001c31e8a031f419d0a14ca'
const BASE_URL = 'https://api.themoviedb.org/3'

export interface Movie {
    original_language?: string
    original_title: string
    id: number
    title?: string
    name?: string // para séries
    poster_path: string
    release_date?: string
    first_air_date?: string
    media_type: 'movie' | 'tv'
    overview?: string
    backdrop_path?: string
    vote_average?: string
}

export const getAnimationMovies = async (): Promise<Movie[]> => {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
        params: {
            // eslint-disable-next-line camelcase
            api_key: API_KEY,
            language: 'pt-BR',
            // eslint-disable-next-line camelcase
            with_genres: '16', // filtro animação
            // eslint-disable-next-line camelcase
            sort_by: 'popularity.desc',
        },
    })
    return response.data.results
}
