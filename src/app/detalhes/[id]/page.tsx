import { HeroSection2 } from '@/components/sections/hero-section'
import { Rating } from '@/components/sections/Rating'
import { getTrendingContent } from '@/services/tmdbApi'
import { getAnimationMovies } from '@/services/tmdbApiAnimation'

interface PageProps {
    params: { id: string }
}

export async function generateStaticParams() {
    const trending = await getTrendingContent()
    const animated = await getAnimationMovies()

    const combined = [...trending, ...animated]

    return combined.map((item) => ({
        id: String(item.id),
    }))
}

export default async function Detalhes({ params }: PageProps) {
    const [trending, animated] = await Promise.all([getAnimationMovies(), getTrendingContent()])

    const allItems = [...trending, ...animated]

    const item = allItems.find((i) => String(i.id) === params.id)
    const title = item?.title || item?.name || 'Sem título'

    const description = item?.overview
    const image = item?.backdrop_path
    const image1 = item?.poster_path
    const vote = item?.vote_average
    const original = item?.original_language
    const originaltitle = item?.original_title

    return (
        <>
            <HeroSection2
                id={params.id}
                title={title}
                description={description}
                image={image}
                image1={image1}
                voteaverage={vote}
                originallanguage={original}
                originaltitle={originaltitle}
            />
            <Rating />
        </>
    )
}
