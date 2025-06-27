'use client'

import { HeroSection2Props } from '@/components/sections/hero-section/hero-section.types'

export function HeroSection2({ id, title, description, image, image1, voteaverage }: HeroSection2Props) {
    return (
        <section
            id="inicio"
            className="relative mx-auto h-screen lg:h-96"
            style={{
                backgroundImage: image ? `url(https://image.tmdb.org/t/p/original${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <div className="container mx-auto flex flex-col gap-8 px-4 pt-24 sm:flex-row">
                    <div className="hidden lg:block">
                        {image1 && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${image1}`}
                                alt={title}
                                className="h-[250px] w-full rounded-lg object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                            {title}
                        </h1>
                        <div className="flex gap-3">
                            <p className="text-white">Avaliação</p>
                            <p className="text-white">{voteaverage}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-white">Sinopse</p>
                            <p className="max-w-6xl text-sm text-white">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
