import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title }: CardProps) {
    return (
        <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-gray-800 bg-gray-900 p-4 transition-transform hover:scale-105">
            <div>
                <div>{icon}</div>
            </div>
            <div>
                <h1 className="font-bold text-white">{title}</h1>
            </div>
            <div>
                <h1 className="text-white">{text}</h1>
            </div>
        </div>
    )
}

export default CardPrimary
