import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import { CiTrash } from 'react-icons/ci'

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
                    image1: data.image1,
                })
            })
            setFavorites(items)
        }
        fetchFavorites()
    }, [])

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'favoritos', id))
            setFavorites((prev) => prev.filter((fav) => fav.id !== id))
        } catch (error) {
            console.error('Erro ao deletar:', error)
        }
    }

    return (
        <div className="">
            {favorites.length === 0 ? (
                <p>Nenhum filme adicionado ainda.</p>
            ) : (
                <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {favorites.map((fav) => (
                        <div key={fav.id} className="rounded p-4">
                            <div className="flex flex-col gap-4">
                                <div>
                                    {fav.image1 && (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${fav.image1}`}
                                            alt={fav.title}
                                            className="h-[350px] w-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-sm font-semibold text-white">{fav.title}</h2>
                                    </div>

                                    <div>
                                        <Button variant="default" onClick={() => handleDelete(fav.id)}>
                                            <CiTrash className="size-5" color="red" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white">Avaliação: {fav.voteaverage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ListCard
