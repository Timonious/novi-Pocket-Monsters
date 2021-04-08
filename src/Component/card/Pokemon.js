import React, { useEffect, useState } from 'react'
import axios from "axios";
import './pokemonCard.css'
import oak from './oak-error.jpeg'

function Pokemon({ url }) {
    const [onePokemon, setOnePokemon] = useState({}),
        [moves, setMoves] = useState(0),
        [abilities, setAbilities] = useState([]),
        [error, setError] = useState('')
    const catchOnlyThisOne = async () => {
        try {
            const {data} = await axios.get(url)
            setOnePokemon(data)
            setMoves(data.moves.length)
            setAbilities(data.abilities)
            // console.log(abilities)
        }
        catch (e) {
            console.log('Something went wrong')
            setError("empty POKEBALL!")
            alert(e)
        }
    }
    useEffect(() => {
        catchOnlyThisOne()
    },[url]);
    return (
        <li key={url} className='poke-card'>
            {error && <div className='error-wrapper'><img src={oak} alt='oak'/><p>{error}</p></div>}
            {onePokemon.types && <div className={onePokemon.types[0].type.name}>
                <div className='card-head'><h3 className='name'>{onePokemon.name} </h3><h2>#{onePokemon.id}</h2></div>
            {onePokemon.sprites && <img src={onePokemon.sprites.other['official-artwork'].front_default} className='poke-pica' alt={onePokemon.name}/>}
                <p className='weight'>weight: {onePokemon.weight/10} Kg</p>
            <ul className='abilities-list'>abilities: {abilities.map((ability) => {
                return (<li className='ability' key={ability.slot}>{ability.slot && ability.ability.name}</li>)
            })} </ul>
            {onePokemon.moves && <p>amount of moves: {moves}</p>}

            </div>
            }
        </li>

    )
}

export default Pokemon