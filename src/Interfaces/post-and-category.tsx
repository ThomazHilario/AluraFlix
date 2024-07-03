export interface PostsProps{
    titulo:string,
    categoria:string,
    descricao:string | null,
    imagem:string,
    video:string
}

// Category
export interface CategoryProps{
    name:string,
    color:string
}