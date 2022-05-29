import React from 'react'
import '../assets/WinPage.css';
import { saveGameState } from './LoadSaveGame';

/**
 * Represents all the elements on the winning page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the ending page.
 */
export default function WinPage({ changePageFn }) {
    return (
        <>
            <div className='pageTitle' >You Won!</div>
            <br />
            <button onClick={() => {
                saveGameState('category');
                changePageFn('category');

                // Unknown bug: does not move to start page after refreshing on ended page.
                document.location = "/"; // Forced reload page
            }
            }>Next Word</button>
        </>
    );
}
