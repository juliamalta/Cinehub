'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection2() {
    return (
        <>
            <section id="inicio" className="mx-auto h-screen bg-black pt-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1>Teste</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
