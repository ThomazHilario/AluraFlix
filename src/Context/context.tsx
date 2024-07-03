import { createContext, useContext, useState, ReactNode } from 'react'

// ------------------ interface ------------------ //
import { PostsProps } from '../Interfaces/post-and-category'

// Context Props
interface ContextProps{
    posts:PostsProps[],
    setPosts:React.Dispatch<React.SetStateAction<PostsProps[]>>
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

    return(
        <PostContext.Provider value={{posts, setPosts}}>
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