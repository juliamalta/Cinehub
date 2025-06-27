import { HeroSection2 } from '@/components/sections/hero-section'
import { getTrendingContent } from '@/services/tmdbApi'

interface PageProps {
    params: { id: string }
}

export async function generateStaticParams() {
    const items = await getTrendingContent()

    return items.map((item) => ({
        id: String(item.id),
    }))
}

export default async function Detalhes({ params }: PageProps) {
    const items = await getTrendingContent()

    const item = items.find((i) => String(i.id) === params.id)
    const title = item?.title || item?.name || 'Sem título'

    const description = item?.overview
    const image = item?.backdrop_path

    return (
        <>
            <HeroSection2 id={params.id} title={title} description={description} image={image} />
        </>
    )
}
