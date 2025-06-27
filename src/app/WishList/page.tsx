import { HeroSection } from '@/components/sections/hero-section'
import List from '@/components/sections/List/List'

export default function WishList() {
    return (
        <>
            <List
                cards={[
                    {
                        id: 1,
                        title: 'Dune: Part Two',
                        vote: '8.8',
                        year: '(2024)',
                    },
                    {
                        id: 1,
                        title: 'Dune: Part Two',
                        vote: '8.8',
                        year: '(2024)',
                    },
                    {
                        id: 1,
                        title: 'Dune: Part Two',
                        vote: '8.8',
                        year: '(2024)',
                    },
                ]}
            />
        </>
    )
}
