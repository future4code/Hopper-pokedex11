import { useNavigate } from "react-router-dom";

const PokemonCard = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={() => navigate("/detalhes")}>Detalhes</button>
        </div>
    )
}

export default PokemonCard;