import { useNavigate } from "react-router-dom";
import PokemonCard from "../../Components/PokemonCard";

const Pokedex = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Pokedex</h1>
            <PokemonCard/>
            <button onClick={() => navigate("/")}>Voltar para a lista de Pokemon</button>
        </>
    )

}

export default Pokedex;