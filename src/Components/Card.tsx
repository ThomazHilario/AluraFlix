// interfaces
interface CardProps{
    imagem:string,
    color:string
}

export const Card = ({imagem, color}:CardProps) => {
    return(
        <article className="h-full w-[332px] overflow-hidden rounded-lg" style={{border: `4px solid ${color}`}}>
            <img className="w-full object-cover" src={imagem} alt="imagem do video"/>

            <section className="bg-black text-white flex justify-between rounded-b-lg p-2 px-14 ">
                <button>Deletar</button>
                <button>Editar</button>
            </section>
        </article>
    )
}