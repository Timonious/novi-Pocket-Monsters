import React, {useState, useEffect} from 'react'
import './buttons.css'

const Buttons = ({ setPokeListUrl, pokeListUrl, nextUrl, previousUrl }) => {
    const [disableNextButton, toggleDisableNextButton] = useState(false),
     [disablePreviousButton, toggleDisablePreviousButton] = useState(true),
        next = () => {setPokeListUrl(nextUrl)
            console.log(pokeListUrl)},
        previous = () => {setPokeListUrl(previousUrl)
            console.log(pokeListUrl)},
        disabler = () => {
        if (nextUrl) {
            toggleDisableNextButton(false)
        }
        else {
            toggleDisableNextButton(true)
        }
        if (previousUrl) {
            toggleDisablePreviousButton(false)
        }
        else {
            toggleDisablePreviousButton(true)
        }
        }
        useEffect(() =>{disabler()}, [previous,next])
return (
    <div className='buttons-wrapper'>
        <button type='button' onClick={previous} disabled={disablePreviousButton}>Previous page</button>
        <button type='button' onClick={next} disabled={disableNextButton}>Next page</button>
    </div>
)
}
export default Buttons