import React, { useEffect, useState } from 'react'
import axios from "axios";

function Pokemon() {
    const [singlePokemon, setSinglePokemon ] = useState([]),
    masterBall = async () => {

    }
    masterBall()
    return (
        <section>
            <h3>{singlePokemon.name}</h3>
            {/*<img src={pokemon.sprites.front_default} alt={pokemon.name}/>*/}
            {/*/!*<p>{pokemon.abilities[0].ability.name}</p>*!/*/}
            {/*/!*<ul className='ability-list'>{pokemon.abilities.map((value) => { return (*!/*/}
            {/*/!*    <li key={pokemon.abilities[value].ability.name}> 1: {pokemon.abilities[0].ability.name}</li>)})}</ul>*!/*/}
            {/*<p>gewicht</p>*/}
            {/*/!*<ul className='moves-list'><li key={move}>moves</li></ul>*!/*/}
        </section>

    )
}

export default Pokemon