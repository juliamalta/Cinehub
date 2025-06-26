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
import { TbWorld } from 'react-icons/tb'
import { TbCurrentLocation } from 'react-icons/tb'
import { TfiMedallAlt } from 'react-icons/tfi'

import AboutUs1 from '@/components/sections/AboutUs/AboutUs1'
import { Cards1, Cards2 } from '@/components/sections/Cards'
import Cards3 from '@/components/sections/Cards/Cards3'
import Cards4 from '@/components/sections/Cards/Cards4'
import Contact from '@/components/sections/Contact/Contact'
import { HeroSection } from '@/components/sections/hero-section'
import { getNowPlayingMovies } from '@/services/tmdbApi'
export default function Home() {
    return (
        <>
            <HeroSection
                title="Bem-vindo ao"
                text="CineHub"
                desc="Descubra, avalie e compartilhe sua paixão pelo cinema. Conecte-se com outros cinéfilos e construa sua biblioteca pessoal de filmes."
            />
            <Cards1
                title="Nossos serviços"
                desc="Oferecemos soluções completas em tecnologia e design para impulsionar seu negócio"
                cards={[
                    {
                        icon: <MdAutoGraph size={30} color="#7a1212" />,
                        title: 'Lançamentos',
                        text: 'Sempre atualizados',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <FiUsers size={30} color="#1d23b8" />,
                        title: 'Comunidade',
                        text: 'Compartilhe opiniões',
                        iconBgColor: '#323eab',
                    },
                    {
                        icon: <CiStar size={30} color="#dbd81d" />,
                        title: 'Avaliações',
                        text: 'Rate seus favoritos',
                        iconBgColor: '#FFEDD5',
                    },
                ]}
            />
            <Cards3 />
            <Cards2
                title="Sua Estatistica"
                cards={[
                    {
                        icon: <CiCircleCheck size={30} color="#1df70a" />,
                        title: '6',
                        text: 'Filmes Assistidos',
                    },
                    {
                        icon: <CiHeart size={30} color="#d10a43" />,
                        title: '3',
                        text: 'Lista de Desejos',
                    },
                    {
                        icon: <PiStarThin size={30} color="#cad10a" />,
                        title: '0',
                        text: 'Avaliações',
                    },
                    {
                        icon: <MdAccessTime size={30} color="#1d20c2" />,
                        title: '16h',
                        text: 'Tempo Assistido',
                    },
                    {
                        icon: <IoMdHeartEmpty size={30} color="#d10a43" />,
                        title: 'Adventure',
                        text: 'Gênero Favorito',
                    },
                    {
                        icon: <MdAutoGraph size={30} color="#1d20c2" />,
                        title: '10',
                        text: 'Filmes Disponiveis',
                    },
                ]}
            />
            <Cards4 />
        </>
    )
}
