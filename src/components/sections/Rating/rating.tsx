'use client'
import * as React from 'react'

import { CardRating } from '@/components/core/CardRating'

function Rating() {
    return (
        <section className="bg-gray-950 py-24" id="cardhero">
            <div className="container mx-auto 2xl:w-2/3">
                <CardRating />
            </div>
        </section>
    )
}

export default Rating
