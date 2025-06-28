'use client'
import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import ListCard from '@/components/core/ListCard/ListCard'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import { ListProps } from '@/components/sections/List/List.types'

function List() {
    return (
        <section className="h-screen bg-gray-950 py-24" id="list">
            <div className="flex flex-col gap-4">
                <div className="container flex items-center justify-center">
                    <h1 className="text-xl font-bold text-white">Minha Lista de Filmes e series </h1>
                </div>
                <div>
                    <ListCard />
                </div>
            </div>
        </section>
    )
}

export default List
