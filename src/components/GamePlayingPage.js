import React from 'react'
import '../assets/GamePlayingPage.css';
import GetRandomWord from './GetRandomWord';


/**
 * Represents all the elements on the playing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the playing page.
 */
export default function GamePlayingPage({ changePageFn, allWords }) {
    return (
        <>
            <h1>Game Playing Page</h1>
            <div>We are now playing hangman!</div>
            <br />
            <GetRandomWord wordBank={allWords} />
            <br />
            <button onClick={() => changePageFn('end')}>Finish Game</button>
        </>
    );
}
