import { collection, getDocs } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'

import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { myListProps } from '@/components/core/ListCard/ListCard.types'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/firebase'

function ListCard() {
    const [favorites, setFavorites] = useState<myListProps[]>([])

    useEffect(() => {
        const fetchFavorites = async () => {
            const querySnapshot = await getDocs(collection(db, 'favoritos'))
            const items: myListProps[] = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                items.push({
                    id: data.id,
                    title: data.title,
                    voteaverage: data.voteaverage,
                })
            })
            setFavorites(items)
        }
        fetchFavorites()
    }, [])

    return (
        <div className="container w-1/3 rounded-xl bg-black p-4">
            {favorites.length === 0 ? (
                <p>Nenhum filme adicionado ainda.</p>
            ) : (
                <ul className="space-y-4">
                    {favorites.map((fav) => (
                        <li key={fav.id} className="rounded border p-4">
                            <h2 className="text-xl font-semibold text-white">{fav.title}</h2>
                            <p className="text-white">Avaliação: {fav.voteaverage}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ListCard
