// logo
import AluraFlix_Logo from '../assets/logo-aluraflix.svg'

export const Footer = () => {
    return(
        <footer className='bg-[#101a2e] flex justify-center items-center h-[10vh]'>
            <img src={AluraFlix_Logo} alt='Logo da AluraFlix'/>
        </footer>
    )
}