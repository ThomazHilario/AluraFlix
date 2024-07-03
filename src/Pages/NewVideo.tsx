// Context
import { UseMyContext } from '../Context/context'

// imports React-hook-form
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// interface
interface SchemaProps{
    titulo:string,
    categoria:string,
    imagem:string,
    video:string,
    descricao:string | null
}

// Schema
const schema = z.object({
    titulo:z.string().min(1,'Preencha o campo acima'),
    categoria:z.string().min(1,'Preencha o campo acima'),
    imagem:z.string().min(1,'Preencha o campo acima'),
    video:z.string().min(1,'Preencha o campo acima'),
    descricao:z.string()
}).required({
    titulo:true,
    categoria:true,
    imagem:true,
    video:true,
    descricao:true
})

export const NewVideo = () => {

    const { register, handleSubmit, formState:{errors}, reset } = useForm<SchemaProps>({resolver:zodResolver(schema)})

    const {posts, setPosts} = UseMyContext()

    // tailwindCss for inputsForms
    const inputsForms = 'flex flex-col gap-3'

    // tailwindCss for inputStyle
    const inputStyle = 'bg-transparent border-[#262626] border-2 pl-5 py-3 rounded-md outline-none'

    // tailwindCss for inputStyleErros
    const inputStyleErrors = 'border-red-500 placeholder-red-500'

    function handleSubmitVideoInDbJson(data:SchemaProps){

        const newPostsArray = [...posts, {
            titulo:data.titulo,
            categoria:data.categoria,
            imagem:data.imagem,
            video:data.video,
            descricao:data.descricao
        }]


        // Criando um novo post
        setPosts(newPostsArray)

        // salvando o novo array de posts na localStorage
        localStorage.setItem('posts',JSON.stringify(newPostsArray))

        reset({
            titulo: '',
            imagem: '',
            video: '',
            descricao: ''
        })
    }

    return(
        <main className="h-screen bg-[#191919] text-white flex flex-col items-center gap-10">
            <article className="text-center">
                <h1 className="text-[4rem] font-bold">novo vídeo</h1>
                <p className="text-lg">Complete o formulário para criar um novo card de vídeo.</p>
            </article>

            <section className="w-[80vw]">
                <h2 className="text-4xl w-full border-y-4 border-[#262626] py-3">Criar Card</h2>
                <form className='mt-5 grid grid-cols-2 gap-5' onSubmit={handleSubmit(handleSubmitVideoInDbJson)}>
                    <p className={inputsForms}>
                        <label className={`text-2xl ${errors.titulo && 'text-red-500'}`}>Titulo</label>
                        <input 
                            className={`${inputStyle} ${errors.titulo && inputStyleErrors}`} 
                            type='text' 
                            {...register('titulo')}
                            placeholder='Digite o titulo...'
                        />
                    </p>

                    <p className={inputsForms}>
                        <label className={`text-2xl ${errors.categoria && 'text-red-500'}`}>Categoria</label>
                        <select className={`${inputStyle} ${errors.categoria && inputStyleErrors}`} {...register('categoria')}>
                            <option className='bg-[#191919]' value="Front-End">Front-End</option>
                            <option className='bg-[#191919]' value="Back-End">Back-End</option>
                            <option className='bg-[#191919]' value="Mobile">Mobile</option>
                        </select>
                    </p>

                    <p className={inputsForms}>
                        <label className={`text-2xl ${errors.imagem && 'text-red-500'}`}>imagem</label>
                        <input 
                            className={`${inputStyle} ${errors.imagem && inputStyleErrors}`} 
                            type='text' 
                            {...register('imagem')}
                            placeholder='Digite a url da imagem...'
                        />
                    </p>

                    <p className={inputsForms}>
                        <label className={`text-2xl ${errors.video && 'text-red-500'}`}>Video</label>
                        <input 
                            className={`${inputStyle} ${errors.video && inputStyleErrors}`} 
                            type='text' 
                            {...register('video')}
                            placeholder='Digite a url do video'
                        />
                    </p>

                    <p className={inputsForms}>
                        <label className={`text-2xl ${errors.descricao && 'text-red-500'}`}>Descricao</label>
                        <textarea 
                            className={`${inputStyle} ${errors.descricao && inputStyleErrors}`} 
                            {...register('descricao')}
                            placeholder='Digite uma descricao do video (opcional)'
                        />
                    </p>
                    
                    <br />

                    <p className='flex gap-5'>
                        <button className='text-[#2271D1] border-2 border-[#2271D1] px-7 py-2 rounded-md' type='submit'>Guardar</button>
                        <button className='border-2 px-7 py-2 rounded-md' type='reset'>Limpar</button>
                    </p>
                </form>
            </section>
        </main>
    )
}