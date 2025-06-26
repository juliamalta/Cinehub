import { useEffect, useState } from 'react'

import CardThree from '@/components/core/CardPrimary/CardThree'
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
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {items.slice(0, 4).map((item) => (
                        <CardThree
                            key={item.id}
                            title={item.title || item.name || 'Sem Título'}
                            year={(item.release_date || item.first_air_date || '').split('-')[0]}
                            genre={item.media_type === 'tv' ? 'Série em Alta' : 'Filme em Alta'}
                            image={item.poster_path}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
