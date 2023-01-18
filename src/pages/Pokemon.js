import {getPokemon} from "../services/pokemonService";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {Card} from "../components/Card";

export function Pokemon (){
    const [pokemon, setPokemon] = useState('')

    const { name } = useParams();
    useEffect(() => {
        const dataFetch = async () => {
            if(name)
                getPokemon(name)
                    .then(response => response.json())
                    .then(response => setPokemon(response));
        }
        dataFetch();
    },  [])

    return pokemon ? (
        <div>
            <Card pokemon={pokemon} ></Card>
        </div>
    ) : (<div>Loading</div>) ;
}
