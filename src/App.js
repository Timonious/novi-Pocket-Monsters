import React, {useEffect, useState} from 'react';
import Pokemon from './Component/card/Pokemon'
import axios from 'axios'
import './App.css';
import Buttons from "./Component/buttons/Buttons";
import oak from "./Component/card/oak-error.jpeg";
import load from './assets/pokeball loader.gif'

function App() {
    const [pokemon, setPokemon] = useState([]),
        [pokeListUrl, setPokeListUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`),
        [nextUrl, setNextUrl] = useState(''),
        [previousUrl, setPreviousUrl] = useState(''),
        [error, setError] = useState(''),
        [loading, toggleLoading] = useState(false),
        pokeDex = async () => {
            toggleLoading(true)
            setError('')
            try {
                const { data: {results, next, previous}} = await axios.get(pokeListUrl)
                setPokemon(results)
                setNextUrl(next)
                setPreviousUrl(previous)
                // console.log(data)
            } catch (e) {
                setError('Oak: Your Pokedex seems to be out of batteries')
                console.error(e)
            }
            toggleLoading(false)
        }
    useEffect(() => {
        pokeDex()
    }, [pokeListUrl]);
    return (
        <section className='page'>
            <Buttons
                nextUrl={nextUrl}
                previousUrl={previousUrl}
                setPokeListUrl={setPokeListUrl}
                pokeListUrl={pokeListUrl}
            />
            {error && <div className='error-wrapper'><img src={oak} alt='oak'/><p>{error}</p></div>}
            {loading && <div className='loading-wrapper'><img src={load} alt='loading'/><p>YOU used POKEBALL!</p></div>}
             <ul className='card-collection'>
                {pokemon && pokemon.map((monster) => <Pokemon url={monster.url}/>
                )}
            </ul>
            <Buttons
                nextUrl={nextUrl}
                previousUrl={previousUrl}
                setPokeListUrl={setPokeListUrl}
                pokeListUrl={pokeListUrl}
            />
        </section>
    );
}

export default App;
