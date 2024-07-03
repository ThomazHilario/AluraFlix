// interfaces
interface CardProps{
    imagem:string,
    color:string
}

// Lucide-React
import { PencilLine, Trash2 } from 'lucide-react'

export const Card = ({imagem, color}:CardProps) => {

    // iconProps
    const iconProps = {
        color:'white',
        size:25
    }

    return(
        <article className="h-full w-[332px] overflow-hidden rounded-lg" style={{border: `4px solid ${color}`}}>
            <img className="w-full object-cover" src={imagem} alt="imagem do video"/>

            <section className="bg-black text-white flex justify-between rounded-b-lg p-2 px-8 ">
                <button className='flex items-center gap-3 text-xl'><PencilLine {...iconProps}/> Deletar</button>
                <button className='flex items-center gap-3 text-xl'><Trash2 {...iconProps}/> Editar</button>
            </section>
        </article>
    )
}