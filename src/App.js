import React, {useEffect, useState} from 'react';
import Pokemon from './Component/card/Pokemon'
import axios from 'axios'
import './App.css';
import Buttons from "./Component/buttons/Buttons";
import logo from './assets/Pokemon_logo_PNG3.png'

function App() {
    const [pokemon, setPokemon] = useState([]),
        [pokeListUrl, setPokeListUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`),
        [nextUrl, setNextUrl] = useState(null),
        [previousUrl, setPreviousUrl] = useState(null)
    const pokeDex = async () => {
        try {
            const result = await axios.get(pokeListUrl)
            // console.log(result)
            setPokemon(result.data.results)
            setNextUrl(result.data.next)
            setPreviousUrl(result.data.previous)
            console.log(pokemon[0])
        } catch (e) {
            console.log('Something went wrong')
            console.error(e)
        }
    }
    useEffect(() => {
        pokeDex()
    }, [pokeListUrl])
    return (
        <>
            <Buttons nextUrl={nextUrl} previousUrl={previousUrl} setPokeListUrl={setPokeListUrl}/>
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
