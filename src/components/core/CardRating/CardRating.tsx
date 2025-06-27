import { CiStar } from 'react-icons/ci'

import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'

function CardRating() {
    return (
        <div className="flex w-full flex-col gap-8 rounded-xl bg-black p-8 shadow-2xl">
            <div className="flex items-center gap-3">
                <div>
                    <h1 className="text-base text-white">Avalie esse filme</h1>
                </div>
                <div className="flex">
                    <CiStar size={30} color="#FFFFFF" />
                    <CiStar size={30} color="#FFFFFF" />
                    <CiStar size={30} color="#FFFFFF" />
                    <CiStar size={30} color="#FFFFFF" />
                    <CiStar size={30} color="#FFFFFF" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="mx-auto text-white">escreva sua avaliaçao</h1>
                </div>
                <div className="">
                    <Button variant="herobutton" size="hero">
                        Publicar Avaliaçao
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardRating
