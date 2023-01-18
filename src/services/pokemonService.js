 export function getPokemons(){
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    return fetch(apiUrl)
}
