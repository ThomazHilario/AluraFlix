// React
import { useState, useEffect } from "react"

// Components
import { Banner } from "../Components/Banner"
import { SectionCategories } from "../Components/Section-Categories"

// interface
interface CategoryProps{
    name:string,
    color:string
}

export const Home = () => {

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
    },[])

    // state - posts
    const [posts, setPosts] = useState([])

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
        <main className="bg-[#001233]">
            <Banner/>

            <div className="flex flex-col gap-36 mt-10 px-[4.30rem] py-10 bg-[#191919]">
                    {categorias.map((categoria, index) => (
                        <SectionCategories 
                            key={index} 
                            name={categoria.name} 
                            color={categoria.color}
                            posts={posts.filter(post => post.categoria.toLowerCase() === categoria.name.toLowerCase())}
                        />
                    ))}
            </div>
        </main>
    )
}