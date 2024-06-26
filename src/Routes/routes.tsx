import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import { Header } from "../Components/Header"
import { Home } from "../Pages/Home"
import { Footer } from "../Components/Footer"

export const RoutesPage = () => {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}