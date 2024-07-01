import { Link, useLocation } from "react-router-dom";

// Interface para ButtonLink
interface ButtonLinkProps{
    path:string,
    name:string
}

export const ButtonLink = ({path, name}:ButtonLinkProps) => {

    // Buscando o caminho da rota onde estou
    const location = useLocation()

    // Criando um estilo personalizado caso eu esteja na rota correta
    const buttonSelect = location.pathname === path ? 'border-blue-600 text-blue-600' : 'border-white text-white'


    return <Link to={path} className={`h-9 w-36 flex justify-center items-center border-2 rounded-md ${buttonSelect}`}>{name}</Link>
}