'use client'

import { HeroSection2Props } from '@/components/sections/hero-section/hero-section.types'

export function HeroSection2({ id, title, description, image }: HeroSection2Props) {
    return (
        <section
            id="inicio"
            className="relative mx-auto h-screen pt-24"
            style={{
                backgroundImage: image ? `url(https://image.tmdb.org/t/p/original${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative flex flex-col items-center justify-center gap-8 px-4 text-center">
                <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    {title}
                </h1>
                <p className="max-w-3xl text-white">{description}</p>
            </div>
        </section>
    )
}
