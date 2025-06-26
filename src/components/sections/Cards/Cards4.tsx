import { useEffect, useState } from 'react'

import CardThree from '@/components/core/CardPrimary/CardThree'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getAnimationMovies, Movie } from '@/services/tmdbApiAnimation'

export default function AnimationList() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getAnimationMovies().then(setMovies)
    }, [])

    return (
        <section className="bg-gray-950 py-16" id="filmes de animaçao">
            <div className="container">
                <div className="mx-auto w-full pt-12">
                    <Carousel>
                        <CarouselContent>
                            {movies.map((movie) => (
                                <CarouselItem key={movie.id} className="px-5 md:basis-1/2 2xl:basis-1/4">
                                    <CardThree
                                        title={movie.title}
                                        year={movie.release_date?.split('-')[0]}
                                        genre="Filmes de Animação"
                                        image={movie.poster_path}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
