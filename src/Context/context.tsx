import { createContext, useContext, useState, ReactNode } from 'react'

// ------------------ interface ------------------ //
import { PostsProps, CategoryProps } from '../Interfaces/post-and-category'

// Context Props
interface ContextProps{
    posts:PostsProps[],
    setPosts:React.Dispatch<React.SetStateAction<PostsProps[]>>
    categorias: CategoryProps[],
    setCategorias:React.Dispatch<React.SetStateAction<CategoryProps[]>>
}

// children props
interface ChildrenType{
    children:ReactNode
}

// Context
const PostContext = createContext<ContextProps | null>(null)

// Provider
export const PostContextProvider = ({children}:ChildrenType) => {

    // post - state
    const [ posts, setPosts ] = useState<PostsProps[]>([])

    // categorias - state
    const [categorias, setCategorias] = useState<CategoryProps[]>([
        {
            name:'Front-End',
            color:'#6BD1FF'
        },
        {
            name:'Back-End',
            color:'#00C86F'
        },
        {
            name:'Mobile',
            color:'#FFBA05'
        }
    ])

    return(
        <PostContext.Provider value={{posts, setPosts, categorias, setCategorias}}>
            {children}
        </PostContext.Provider>
    )
}

export const UseMyContext = ():ContextProps => {
    const context = useContext(PostContext)

    if(!context){
        throw new Error('O contexto nao existe!!')
    }

    return context
}