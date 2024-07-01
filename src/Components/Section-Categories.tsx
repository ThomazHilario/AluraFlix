// Radix UI
import * as ScrollArea from '@radix-ui/react-scroll-area'

// Components
import { Card } from './Card'

// interface 
import { PostsProps } from '../Interfaces/post-and-category'
interface SectionCategoriesProps{
    name:string,
    color:string,
    posts:PostsProps[]
}

export const SectionCategories = ({name, color, posts}:SectionCategoriesProps) => {
    if(posts.length > 0){
        return(
            <section className='flex flex-col gap-8 md:-mt-16'>
                <h1 className={`text-2xl md:text-4xl p-3 text-white text-center font-bold rounded-2xl md:w-72 w-auto`} style={{backgroundColor:color}}>{name}</h1>
    
                <div className='flex justify-center'>
                    <ScrollArea.Root className="flex w-[90vw] h-full p-2 rounded bg-transparent">
                        <ScrollArea.Viewport className="flex w-full rounded">
                            <div className='flex justify-evenly gap-5'>
                                {posts.map((post,idx) => <Card key={idx} imagem={post.imagem} color={color}/>)}
                            </div>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar
                        className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                        orientation="horizontal"
                        >
                        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" style={{backgroundColor:color}}/>
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Corner className="bg-black" />
                    </ScrollArea.Root>
                </div>
            </section>
        )
    }
}