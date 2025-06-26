import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardStatistic({ text, icon, title }: CardProps) {
    return (
        <div className="flex w-full flex-col gap-2 rounded-2xl border-2 border-gray-800 bg-black p-4 transition-transform hover:scale-105">
            <div className="flex flex-col gap-2">
                <div>
                    <div>{icon}</div>
                </div>
                <div>
                    <div className="text-base font-bold text-white">{title}</div>
                </div>
                <div>
                    <div className="text-xs text-white">{text}</div>
                </div>
            </div>
        </div>
    )
}

export default CardStatistic
