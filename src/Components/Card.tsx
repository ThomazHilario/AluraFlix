// context
import { UseMyContext } from '../Context/context'

// interfaces
interface CardProps{
    id:string,
    imagem:string,
    color:string
}

// Lucide-React
import { PencilLine, Trash2 } from 'lucide-react'

export const Card = ({id, imagem, color}:CardProps) => {

    // Context - state
    const { posts, setPosts } = UseMyContext()

    // deleteCard
    async function deleteCard(){
        try {
            // Atualizando a state de posts
            setPosts(posts.filter(post => post.id !== id))

            // Removendo o json serve o post
            await fetch(`http://localhost:3000/videos/${id}`, {method:'DELETE'})
        } catch (e) {
            console.log(e)
        }
    }

    // iconProps
    const iconProps = {
        color:'white',
        size:25
    }

    return(
        <article className="h-full w-[332px] overflow-hidden rounded-lg" style={{border: `4px solid ${color}`}}>
            <img className="w-full object-cover" src={imagem} alt="imagem do video"/>

            <section className="bg-black text-white flex justify-between rounded-b-lg p-2 px-8 ">
                <button className='flex items-center gap-3 text-xl' onClick={deleteCard}>
                    <Trash2 {...iconProps}/> Deletar
                </button>

                <button className='flex items-center gap-3 text-xl'>
                    <PencilLine {...iconProps}/> Editar
                </button>
            </section>
        </article>
    )
}