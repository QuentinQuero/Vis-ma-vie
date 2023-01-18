import {getPokemons} from "../services/pokemonService";
import {useEffect, useState} from "react";
import * as arr from "react-bootstrap/ElementChildren";

export function Pokemons (){
    const [pokemon, setPokemons] = useState(null)

    function updatePokemon(arrPokemon) {
        setPokemons(arrPokemon.map(obj => <li key={obj.name}>{obj.name}</li>))
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
            <ul>
                {pokemon}
            </ul>
        </div>
    ) : (
        <div>
            <h2>Loading</h2>
        </div>
    );
}
