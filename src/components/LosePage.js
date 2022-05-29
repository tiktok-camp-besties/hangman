import React from 'react'
import '../assets/LosePage.css';
import { saveGameState } from './LoadSaveGame';

/**
 * Represents all the elements on the losing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the ending page.
 */
export default function LosePage({ changePageFn }) {
    let answer = 'fix this';
    return (
        <>
            <div className='pageTitle' >You Lost.</div>
            <div>The word was: {answer}</div>
            <br />
            <button onClick={() => {
                saveGameState('category');
                changePageFn('category');

                // Unknown bug: does not move to start page after refreshing on ended page.
                document.location = "/"; // Forced reload page
            }
            }>Try Again</button>
        </>
    );
}
