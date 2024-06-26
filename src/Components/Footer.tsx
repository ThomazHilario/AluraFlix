// logo
import AluraFlix_Logo from '../assets/logo-aluraflix.svg'

export const Footer = () => {
    return(
        <footer className='bg-black/90 flex justify-center items-center h-20'>
            <img src={AluraFlix_Logo} alt='Logo da AluraFlix'/>
        </footer>
    )
}