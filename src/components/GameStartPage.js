import React from 'react'
import '../assets/GameStartPage.css';

/**
 * Represents all the elements on the starting page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the start page.
 */
export default function GameStartPage({ changePageFn }) {
    return (
        <>
            <h1>Game Start Page</h1>
            <div>Hit the button to start playing hangman!</div>
            <br />
            <button onClick={() => changePageFn('playing')}>Start Playing</button>
        </>
    );
}
