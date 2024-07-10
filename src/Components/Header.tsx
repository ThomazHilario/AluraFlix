// Components
import { ButtonLink } from './Button-Link'
import { Menu } from './Menu'
// logo
import AluraFlix_Logo from '../assets/logo-aluraflix.svg' 

export const Header = () => {
    return(
        <header className="bg-black/90 flex justify-between items-center px-5 h-[10vh]">

            <img src={AluraFlix_Logo} alt="Logo da AluraFlix"/>


            <Menu/>

            <nav className="hidden sm:flex justify-center items-center gap-5">
                <ButtonLink path='/' name='Home'/>
                <ButtonLink path='/newvideo' name='Novo Video'/>
            </nav>
        </header>
    )
}