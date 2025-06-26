import { useEffect, useState } from 'react'

import CardThree from '@/components/core/CardPrimary/CardThree'
import { getAnimationMovies, Movie } from '@/services/tmdbApiAnimation'

export default function AnimationList() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getAnimationMovies().then(setMovies)
    }, [])

    return (
        <section className="bg-gray-950 py-16" id="filmes de animaçao">
            <div className="container">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {movies.slice(0, 4).map((movie) => (
                        <CardThree
                            key={movie.id}
                            title={movie.title}
                            year={movie.release_date?.split('-')[0]}
                            genre="Filmes de Animação"
                            image={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
