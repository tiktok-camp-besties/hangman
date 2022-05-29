import React from 'react'
import '../assets/GamePlayingPage.css';
import GetRandomWord from './GetRandomWord';
import UseCurrentWord from './UseCurrentWord';
import { loadSavedStates, saveGameState } from './LoadSaveGame';


/**
 * Represents all the elements on the playing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the playing page.
 */
export default function GamePlayingPage({ changePageFn, allWords }) {
    const data = loadSavedStates();
    var category = data["category"];
    var word = data["word"];
    if (word === "") {
        return (
            <>
                <h1>Debug: Game Playing Page</h1>
                <div>Replace this with the graphics</div>
                <GetRandomWord wordBank={allWords} />
                <div>Replace this with the _ _ _ A _ _. Perhaps a 'playerGuess' component?</div>
                <div>Replace this with the Keyboard</div>
                <div>Change whether will go to win or lose page depending on game's outcome</div>
                <button onClick={() => {
                    saveGameState('win');
                    changePageFn('win');
                }
                }>Debug: Win Game</button>
            </>
        );
    } else {
        return (
            <>
                <h1>Debug: Game Playing Page</h1>
                <div>Replace this with the graphics</div>
                <UseCurrentWord category={category} word={word} />
                <div>Replace this with the _ _ _ A _ _. Perhaps a 'playerGuess' component?</div>
                <div>Replace this with the Keyboard</div>
                <div>Change whether will go to win or lose page depending on game's outcome</div>
                <button onClick={() => {
                    saveGameState('win');
                    changePageFn('win');
                }
                }>Debug: Win Game</button>
            </>
        );
    }
}
