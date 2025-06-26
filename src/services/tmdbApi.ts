// src/services/tmdbApi.ts
import axios from 'axios'

const API_KEY = '28fc232cc001c31e8a031f419d0a14ca'
const BASE_URL = 'https://api.themoviedb.org/3'

export interface TrendingItem {
    id: number
    title?: string
    name?: string // para séries
    poster_path: string
    release_date?: string
    first_air_date?: string
    media_type: 'movie' | 'tv'
}

export const getTrendingContent = async (): Promise<TrendingItem[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/all/week`, {
            params: {
                api_key: API_KEY,
                language: 'pt-BR',
            },
        })
        return response.data.results
    } catch (error) {
        console.error('Erro ao buscar conteúdos em alta:', error)
        return []
    }
}
