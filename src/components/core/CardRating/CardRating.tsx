import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { CiStar } from 'react-icons/ci'

import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { ratingProps } from '@/components/core/CardRating/CardRating.types'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/lib/firebase'
function CardRating() {
    const [comment, setComment] = useState('')

    const handleAddPublic = async () => {
        try {
            await addDoc(collection(db, 'rating'), {
                publicrating: comment,
            })
            alert('Publicação adicionada')
            setComment('')
        } catch (error) {
            console.error('erro ao adicionar ao favorito', error)
        }
    }

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
                    <Textarea
                        className="border-2 border-gray-900 text-white"
                        placeholder="Escreva sua avaliação"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className="">
                    <Button onClick={handleAddPublic} variant="herobutton" size="hero">
                        Publicar Avaliaçao
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardRating
