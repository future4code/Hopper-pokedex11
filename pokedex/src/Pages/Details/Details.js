import { useNavigate } from "react-router-dom";

const Details = () => {

    const navigate = useNavigate()
    
    return (
        <>
            <h1>Detalhes</h1>
            <button onClick={() => navigate("/")}>Voltar</button>
        </>
    )

}

export default Details;