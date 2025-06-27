'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection1({ title, text, desc }: HeroProps) {
    return (
        <>
            <section id="inicio" className="mx-auto bg-black py-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            {title}
                            <AuroraText colors={['#bd202d', '#9c9c0c']}>
                                <span className="ml-2 font-bold text-color-studio">{text}</span>
                            </AuroraText>
                        </h1>
                        <p className="text-base text-white sm:text-base lg:w-2/3">{desc}</p>
                    </div>
                    <div>
                        <Button variant="herobutton" size="hero" asChild>
                            <Link href="/dashboard"> Vamos Começar</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
