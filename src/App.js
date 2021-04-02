import React, {useEffect, useState} from 'react';
import Pokemon from './Component/card/Pokemon'
import axios from 'axios'
import './App.css';
import Buttons from "./Component/buttons/Buttons";
import oak from "./Component/card/oak-error.jpeg";

function App() {
    const [pokemon, setPokemon] = useState([]),
        [pokeListUrl, setPokeListUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`),
        [nextUrl, setNextUrl] = useState(null),
        [previousUrl, setPreviousUrl] = useState(null),
        [error, setError] = useState(''),
        pokeDex = async () => {
        try {
            const result = await axios.get(pokeListUrl)
            // console.log(result)
            setPokemon(result.data.results)
            setNextUrl(result.data.next)
            setPreviousUrl(result.data.previous)
            console.log(pokemon[0])
        } catch (e) {
            setError('Oak: Your Pokedex seems to be out of batteries')
            console.error(e)
        }
    }
    useEffect(() => {
        pokeDex()
    }, [pokeListUrl])
    return (
        <>
            <Buttons nextUrl={nextUrl} previousUrl={previousUrl} setPokeListUrl={setPokeListUrl}/>
            {error && <div className='error-wrapper'><img src={oak} alt='oak'/><p>{error}</p></div>}
            {pokemon ? <ul className='card-collection'>
                {pokemon.map((monster) => {
                    return (
                        <Pokemon url={monster.url}/>)
                })}
            </ul> : <p>Loading PokeDex, Please wait</p>}

        </>
    );
}

export default App;
