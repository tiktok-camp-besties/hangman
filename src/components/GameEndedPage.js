import React from 'react'
import '../assets/GameEndedPage.css';

/**
 * Represents all the elements on the ending page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the ending page.
 */
export default function GameEndedPage({ changePageFn }) {
    return (
        <>
            <h1>Game Ended Page</h1>
            <div>You have completed the hangman game! You have either saved the guy or lost all of his limbs. Click the button below to start a new game.</div>
            <br />
            <button onClick={() => changePageFn('start')}>Next Word</button>
        </>
    );
}
