import { useEffect, useState } from 'react'

import CardThree from '@/components/core/CardPrimary/CardThree'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getTrendingContent, TrendingItem } from '@/services/tmdbApi'

export default function TrendingCarousel() {
    const [items, setItems] = useState<TrendingItem[]>([])

    useEffect(() => {
        async function fetchTrending() {
            const data = await getTrendingContent()
            setItems(data)
        }
        fetchTrending()
    }, [])

    return (
        <section className="bg-gray-950 py-16" id="Filmes em alta card">
            <div className="container">
                <div className="mx-auto w-full pt-12">
                    <Carousel>
                        <CarouselContent>
                            {items.map((item) => (
                                <CarouselItem key={item.id} className="px-5 md:basis-1/2 2xl:basis-1/4">
                                    <CardThree
                                        title={item.title || item.name || 'Sem Título'}
                                        year={(item.release_date || item.first_air_date || '').split('-')[0]}
                                        genre={item.media_type === 'tv' ? 'Série em Alta' : 'Filme em Alta'}
                                        image={item.poster_path}
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
