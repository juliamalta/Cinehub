import { CardProps } from './Card.types'

export default function CardThree({ title, year, genre, image, desc }: CardProps) {
    return (
        <div className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            {image && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    alt={title}
                    className="h-[450px] w-full object-cover"
                />
            )}
            <div className="p-5">
                <h2 className="text-md font-bold text-white drop-shadow-md">{title}</h2>
                {year && <p className="mt-1 text-gray-400">{year}</p>}
                {genre && (
                    <span className="mt-3 inline-block rounded-full bg-red-900 px-4 py-1 text-xs font-semibold uppercase text-white drop-shadow-md">
                        {genre}
                    </span>
                )}
                {desc && <p className="mt-3 text-sm text-gray-300">{desc}</p>}
            </div>
        </div>
    )
}
