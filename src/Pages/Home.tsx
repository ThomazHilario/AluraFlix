// React
import { useEffect } from "react"

// Context
import { UseMyContext } from "../Context/context"

// Components
import { Banner } from "../Components/Banner"
import { SectionCategories } from "../Components/Section-Categories"

// interface
import {PostsProps} from '../Interfaces/post-and-category'

export const Home = () => {
    // state - posts
    const {posts, setPosts, categorias} = UseMyContext()
    
    // Fazer uma requisicao quando o componente renderizar
    useEffect(() => {

        async function loadPosts(){
            try {
                const response = await fetch('http://localhost:3000/videos')

                // transformando os dados em javascript
                const data = await response.json()

                setPosts(data)
            } catch (error) {
                console.log(error)
            }
        }

        loadPosts()
        
    },[setPosts])  

    return (
        <main className="h-screen bg-[#191919] md:bg-[#001233] md:h-auto">
            <Banner/>

            <div className="flex flex-col gap-36 md:mt-10 px-[4.30rem] py-10 bg-[#191919] md:h-auto">
                    {categorias.map((categoria, index) => (
                        <SectionCategories 
                            key={index} 
                            name={categoria.name} 
                            color={categoria.color}
                            posts={posts.filter((post:PostsProps) => post.categoria.toLowerCase() === categoria.name.toLowerCase())}
                        />
                    ))}
            </div>
        </main>
    )
}