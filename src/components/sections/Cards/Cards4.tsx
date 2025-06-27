import Link from 'next/link'
import { useEffect, useState } from 'react'

import CardThree from '@/components/core/CardPrimary/CardThree'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getAnimationMovies, Movie } from '@/services/tmdbApiAnimation'

export default function AnimationList() {
    const [items, setItems] = useState<Movie[]>([])

    useEffect(() => {
        getAnimationMovies().then(setItems)
    }, [])

    return (
        <section className="bg-gray-950 py-16" id="filmes de animaçao">
            <div className="container">
                <div className="mx-auto w-full pt-12">
                    <Carousel>
                        <CarouselContent>
                            {items.map((item) => (
                                <CarouselItem key={item.id} className="px-5 md:basis-1/2 2xl:basis-1/4">
                                    <Link href={`/detalhes/${item.id}`}>
                                        <CardThree
                                            title={item.title}
                                            year={item.release_date?.split('-')[0]}
                                            genre="Filmes de Animação"
                                            image={item.poster_path}
                                        />
                                    </Link>
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
