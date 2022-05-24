import React from 'react'
import '../assets/GamePlayingPage.css';
import GetRandomWord from './GetRandomWord';
import UseCurrentWord from './UseCurrentWord';
import {loadSavedStates, saveGameState} from './LoadSaveGame';


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
                <h1>Game Playing Page</h1>
                <div>We are now playing hangman!</div>
                <br />
                <GetRandomWord wordBank={allWords} />;
                <br />
                <button onClick={() => {
                        saveGameState('ended');
                        changePageFn('ended');
                    }
                }>Finish Game</button>
            </>
        );
    } else {
         return (
            <>
                <h1>Game Playing Page</h1>
                <div>We are now playing hangman!</div>
                <br />
                <UseCurrentWord category={category} word={word} />;
                <br />
                <button onClick={() => {
                        saveGameState('ended');
                        changePageFn('ended');
                    }
                }>Finish Game</button>
            </>
        );
    }
}
