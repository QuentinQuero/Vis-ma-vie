import {useEffect, useState} from "react";
import {getPokemons} from "../services/pokemonService";
import {Link} from "react-router-dom";

export function Home (){
    const [pokemon, setPokemons] = useState(null)

    function updatePokemon(arrPokemon) {
        setPokemons(arrPokemon.map(obj => <li key={obj.name}><Link to={`/pokemon/${obj.name}`} className="nav-link list-group-item"  >{obj.name}</Link> </li>))
    }

    useEffect(() => {
        const dataFetch = async () => {
            getPokemons()
                .then(response => response.json())
                .then(data => updatePokemon(data.results));
        }
        dataFetch();
    }, [])

    return pokemon ? (
        <div>
            <ul className="list-group">
                {pokemon}
            </ul>
        </div>
    ) : (
        <div></div>
    );
}
