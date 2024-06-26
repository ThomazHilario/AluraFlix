import BannerImg from '../assets/banner.png'
import Card from '../assets/card.png'

export const Banner = () => {
    return(
        <div style={{backgroundImage:`url(${BannerImg})`}} className=' hidden md:flex justify-center items-end w-full bg-no-repeat bg-cover shadow-banner bg-center'>
            <section className='flex justify-between w-full gap-14 py-20 px-5'>
                <div className='flex flex-col gap-14'>
                    <h1 className='bg-cyan-400 w-72 text-5xl px-2 py-5 text-center text-white font-bold rounded-lg'>FRONT END</h1>

                    <div className='flex flex-col gap-5 lg:w-[450px] xl:w-[600px]'>
                        <h2 className='text-4xl text-white'>SEO COM REACT</h2>
                        <p className='text-white text-justify'>
                            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 
                        </p>
                    </div>
                </div>

                <img className=' md:w-[400px] lg:w-[500px]' src={Card} alt="imagem do card" />
            </section>
        </div>
    )
}