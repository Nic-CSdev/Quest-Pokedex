import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../components/Home/home"
import { PokemonDetails } from "../components/Details/details" 

export const PokeRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
}