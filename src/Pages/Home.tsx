// React
import { useState, useEffect } from "react"

// Context
import { UseMyContext } from "../Context/context"

// Components
import { Banner } from "../Components/Banner"
import { SectionCategories } from "../Components/Section-Categories"

// interface
import {PostsProps ,CategoryProps } from '../Interfaces/post-and-category'

export const Home = () => {
    // state - posts
    const {posts, setPosts} = UseMyContext()
    
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

        if(localStorage.getItem('posts') !== null){
            setPosts(JSON.parse(localStorage.getItem('posts') as string))
        } else{
            loadPosts()
        }
    },[setPosts])  

    // state - categorias
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

    return (
        <main className="bg-[#001233] h-screen md:h-auto">
            <Banner/>

            <div className="flex flex-col gap-36 md:mt-10 px-[4.30rem] py-10 bg-[#191919] h-full md:h-auto">
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