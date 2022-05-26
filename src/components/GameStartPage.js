import React from 'react'
import '../assets/GameStartPage.css';
import logo from '../assets/HappyTreeFriends.png';
import { saveGameState } from './LoadSaveGame';

/**
 * Represents all the elements on the starting page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the start page.
 */
export default function GameStartPage({ changePageFn }) {
    return (
        <>
            <img src={logo} alt="Happy Tree Man Game Logo" />
            <br />
            <button onClick={() => {
                saveGameState('category');
                changePageFn('category');
            }
            }>Start Playing</button>
        </>
    );
}
