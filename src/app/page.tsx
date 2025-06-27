'use client'

import { useEffect, useState } from 'react'
import { CiMobile1 } from 'react-icons/ci'
import { CiStar } from 'react-icons/ci'
import { CiCircleCheck } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineColorize } from 'react-icons/md'
import { MdCode } from 'react-icons/md'
import { MdOutlineGroups } from 'react-icons/md'
import { MdAutoGraph } from 'react-icons/md'
import { MdAccessTime } from 'react-icons/md'
import { PiStarThin } from 'react-icons/pi'

import { Cards1, Cards2, Cards5 } from '@/components/sections/Cards'
import Cards3 from '@/components/sections/Cards/Cards3'
import Cards4 from '@/components/sections/Cards/Cards4'
import { HeroSection, HeroSection1 } from '@/components/sections/hero-section'

export default function Home() {
    return (
        <>
            <HeroSection1
                title="Explore com "
                text="CineHub"
                desc="Acompanhe os filmes que você já viu.
Salve os que quer assistir.
Compartilhe suas recomendações com os amigos.
Comece agora — é grátis!"
            />
            <Cards5 />
        </>
    )
}
