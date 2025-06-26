'use client'
import * as React from 'react'

import CardSecondary from '@/components/core/CardPrimary/CardSecondary'
import CardStatistic from '@/components/core/CardPrimary/CardStatistic'
import { AnimatedList } from '@/components/magicui/animated-list'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card2({ cards, title, desc }: CardSectionProps) {
    return (
        <section className="bg-gray-950 py-8" id="cardestatiscas">
            <div className="container mx-auto items-center justify-center">
                <div className="mx-auto w-full rounded-2xl bg-black p-16">
                    <AnimatedList>
                        {cards.map((card, index) => (
                            <CardStatistic key={index} icon={card.icon} title={card.title} text={card.text} />
                        ))}
                    </AnimatedList>
                </div>
            </div>
        </section>
    )
}

export default Card2
