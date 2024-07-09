// React-Hook-Form
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Radix
import * as Dialog from '@radix-ui/react-dialog'

// Lucide-React
import { PencilLine } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/themes'
// interfaces
interface LucideIconsProps{
    color:string,
    size:number
}

interface ModalProps{
    iconProps:LucideIconsProps,
    id:string
    titulo:string,
    categoria:string,
    video:string,
    imagem:string,
    descricao:string | null
}

interface FormProps{
    titulo:string,
    categoria:string,
    video:string,
    imagem:string,
    descricao:string | null
}

// schema
const schema = z.object({
    titulo:z.string(),
    categoria:z.string(),
    imagem:z.string(),
    video:z.string(),
    descricao:z.string()
}).required({
    titulo:true,
    categoria:true,
    imagem:true,
    video:true,
    descricao:true
})

export const Modal = ({iconProps, id, titulo, categoria, imagem, video, descricao}: ModalProps) => {

    // Desestruturando o useForm
    const { register, handleSubmit } = useForm<FormProps>({resolver:zodResolver(schema)})

    // ContainerIInputStyle
    const containerInput = 'flex flex-col gap-1 w-72'

    // EditCard
    async function editCard(data:FormProps){
        try {

            const newDataPost = {
                id:id,
                titulo:data.titulo,
                categoria:data.categoria,
                imagem:data.imagem,
                video:data.video,
                descricao:data.descricao
            }

            await fetch(`http://localhost:3000/videos/${id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newDataPost)
            })
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <Dialog.Root>
            <Dialog.Trigger className='flex items-center gap-3 text-xl'>
                <PencilLine {...iconProps}/> Editar
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Content className='absolute top-1/2 left-1/2 -translate-y-1/2 md:-translate-y-[5%] -translate-x-1/2'>
                    <section className='bg-[#03122F] text-white h-[85vh] flex flex-col justify-center items-center gap-10 w-[100vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] md:px-[9rem] rounded-md border-4 border-[#6BD1FF]'>
                        <Dialog.Title className='text-6xl'>Editar Card</Dialog.Title>

                        <VisuallyHidden>
                            <Dialog.Description>
                                Formulário para editar informações do card.
                            </Dialog.Description>
                        </VisuallyHidden>

                        <form 
                            className='flex flex-col gap-5 items-center' 
                            onSubmit={handleSubmit(editCard)}
                        >
                            <p className={containerInput}>
                                <label>Titulo</label>
                                <input 
                                    className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent' 
                                    type="text" 
                                    {...register('titulo',{value:titulo})}
                                />
                            </p>

                            <p className={containerInput}>
                                <label>Categoria</label>
                                <select  
                                    className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent'
                                    {...register('categoria',{value:categoria})}
                                >
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                    <option value="Mobile">Mobile</option>
                                </select>
                            </p>

                            <p className={containerInput}>
                                <label>Imagem</label>
                                <input 
                                    className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent' 
                                    type="text" 
                                    {...register('imagem',{value:imagem})}
                                />
                            </p>

                            <p className={containerInput}>
                                <label>Video</label>
                                <input 
                                    className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent' 
                                    type="text" 
                                    {...register('video',{value:video})}
                                />
                            </p>

                            <p className={containerInput}>
                                <label>Descrição</label>
                                <textarea 
                                    className='resize-none p-1 border-[#2271D1] border-2 rounded-md bg-transparent'
                                    {...register('descricao',{value:descricao ? descricao : ''})}
                                >    
                                </textarea>
                            </p>

                            <div className='flex justify-between w-full'>
                                <button type='submit'>Editar</button>
                                <button type='reset'>Limpar</button>
                            </div>
                        </form>
                    </section>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
} 