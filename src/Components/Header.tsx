// Components
import { ButtonLink } from './Button-Link'

// logo
import AluraFlix_Logo from '../assets/logo-aluraflix.svg' 

export const Header = () => {
    return(
        <header className="bg-black/90 flex justify-between items-center px-5 h-20">

            <img src={AluraFlix_Logo} alt="Logo da AluraFlix"/>

            <nav className="hidden sm:flex justify-center items-center gap-5">
                <ButtonLink path='/' name='Home'/>
                <ButtonLink path='/newvideo' name='Novo Video'/>
            </nav>
        </header>
    )
}