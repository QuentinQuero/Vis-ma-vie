
export function Card (props){
    const types = props?.pokemon.types.map(type => <li key={"type"+type.slot}>{type.type.name}</li>)

    return props ? (
        <div className="card">
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon?.name}></img>
            <div className="card-body">
                <h5 className="card-title">{props.pokemon.name}</h5>
                <ul>{types}</ul>
            </div>
        </div>
    ) : (<div>Loading</div>)
}
