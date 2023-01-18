
export function Card (props){
    return props ? (
        <div className="card">
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon?.name}></img>
            <div className="card-body">
                <h5 className="card-title">{props.pokemon.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
            </div>
        </div>
    ) : (<div>Loading</div>)
}
