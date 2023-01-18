 export function getPokemons(){
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
    return fetch(apiUrl)
}

export function getPokemon(name){
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
}
