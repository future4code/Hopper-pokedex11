import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import Details from "../Pages/Details/Details";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/pokedex"} element={<Pokedex/>}/>
                    <Route path={"/detalhes"} element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        
        </>
    )

}

export default Router;