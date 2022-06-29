import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import PokemonCard from "../../Components/PokemonCard";


const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <h1>Home</h1>
            <PokemonCard />
            <button onClick={() => navigate("/pokedex")}>Ver minha Pokedex</button>
            
        </>
    )

}

export default Home;