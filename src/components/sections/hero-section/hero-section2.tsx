'use client'

import { collection, addDoc } from 'firebase/firestore'
import Link from 'next/link'
import { CiPlay1 } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'

import { HeroSection2Props } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/firebase'

export function HeroSection2({
    id,
    title,
    description,
    image,
    image1,
    voteaverage,
    originallanguage,
    originaltitle,
}: HeroSection2Props) {
    const handleAddToFavorites = async () => {
        try {
            await addDoc(collection(db, 'favoritos'), {
                id,
                title,
                voteaverage,
            })
            console.log('filme adicionado ao firebase com sucesso')
        } catch (error) {
            console.error('erro ao adicionar ao favorito', error)
        }
    }

    return (
        <section
            id="inicio"
            className="relative mx-auto h-screen py-24 lg:h-96"
            style={{
                backgroundImage: image ? `url(https://image.tmdb.org/t/p/original${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="absolute inset-0 z-0 bg-black bg-opacity-60" />
            <div className="container absolute inset-0 mx-auto">
                <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row">
                    <div className="hidden lg:block">
                        {image1 && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${image1}`}
                                alt={title}
                                className="h-[250px] w-full rounded-lg object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                            {title}
                        </h1>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <p className="text-white">{originallanguage}</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-white">Avaliação</p>
                                <p className="text-white">{voteaverage}</p>
                            </div>
                            <p className="font-bold text-white">Sinopse</p>
                            <p className="max-w-6xl text-sm text-white">{description}</p>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="herobutton" size="hero">
                                <CiPlay1 className="mr-4 size-8" color="white" /> Assistir Trailer
                            </Button>
                            <Button variant="default" size="hero" onClick={handleAddToFavorites}>
                                <IoMdAdd className="mr-4 size-8" color="white" /> Minha Lista
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
