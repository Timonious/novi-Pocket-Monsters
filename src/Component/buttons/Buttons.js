import React, {useState, useEffect} from 'react'
import './buttons.css'

const Buttons = ({ setPokeListUrl, nextUrl, previousUrl }) => {
    const [disableNextButton, toggleDisableNextButton] = useState(false),
     [disablePreviousButton, toggleDisablePreviousButton] = useState(false),
        next = () => {setPokeListUrl(nextUrl)
            console.log(nextUrl)},
        previous = () => {setPokeListUrl(previousUrl)
            console.log(previousUrl)},
        disabler = () => {
        if (nextUrl) {
            toggleDisableNextButton(false)

        }
        if (previousUrl) {
            toggleDisablePreviousButton(false)
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