import Link from 'next/link'
import { TbMovie } from 'react-icons/tb'

import logo from '../../../../public/images/logoFooter.png'
import { FooterProps } from './Footer.types'

function Footer({ rights }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden bg-black">
            <div className="md-gap-0 flex-colgap-10 container flex w-full justify-center py-16 md:flex-row">
                <div className="flex items-center justify-center gap-2">
                    <div>
                        <TbMovie size={30} color="red" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">CineHub</h1>
                    </div>
                </div>
            </div>

            {/* Copyright and Social Media Links */}
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center py-12">
                    <div className="mb-6">
                        <p className="text-center text-sm text-white">{rights}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
