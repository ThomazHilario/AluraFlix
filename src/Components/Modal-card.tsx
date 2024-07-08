import * as Dialog from '@radix-ui/react-dialog'

// Lucide-React
import { PencilLine } from 'lucide-react'

interface LucideIconsProps{
    color:string,
    size:number
}

interface ModalProps{
    iconProps:LucideIconsProps,
    titulo:string,
    categoria:string,
    video:string,
    imagem:string,
    descricao:string | null
}

export const Modal = ({iconProps, titulo, categoria, imagem, video, descricao}: ModalProps) => {

    // ContainerIInputStyle
    const containerInput = 'flex flex-col gap-1 w-72'

    return(
        <Dialog.Root>
            <Dialog.Trigger className='flex items-center gap-3 text-xl'>
                <PencilLine {...iconProps}/> Editar
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Content className='absolute top-1/2 left-1/2 -translate-y-1/2 md:-translate-y-[5%] -translate-x-1/2'>
                    <section className='bg-[#03122F] text-white h-[85vh] flex flex-col justify-center items-center gap-10 w-[100vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] md:px-[9rem] rounded-md border-4 border-[#6BD1FF]'>
                        <h2 className='text-6xl'>Editar Card</h2>

                        <form className='flex flex-col gap-5 items-center'>
                            <p className={containerInput}>
                                <label>Titulo</label>
                                <input value={titulo} className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent' type="text" />
                            </p>

                            <p className={containerInput}>
                                <label>Categoria</label>
                                <select defaultValue={categoria} className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent'>
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                    <option value="Mobile">Mobile</option>
                                </select>
                            </p>

                            <p className={containerInput}>
                                <label>Imagem</label>
                                <input value={imagem} className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent' type="text" />
                            </p>

                            <p className={containerInput}>
                                <label>Video</label>
                                <input value={video} className='p-1 border-[#2271D1] border-2 rounded-md bg-transparent' type="text" />
                            </p>

                            <p className={containerInput}>
                                <label>Descrição</label>
                                <textarea value={descricao ? descricao : ''} className='resize-none p-1 border-[#2271D1] border-2 rounded-md bg-transparent' name="" id=""></textarea>
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