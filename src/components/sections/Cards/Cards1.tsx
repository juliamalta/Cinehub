'use client'
import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards, title, desc }: CardSectionProps) {
    return (
        <section className="bg-black py-24" id="cardhero">
            <div className="container mx-auto items-center justify-center">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-center">
                    {cards.map((card, index) => (
                        <CardPrimary key={index} icon={card.icon} title={card.title} text={card.text} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Card1
