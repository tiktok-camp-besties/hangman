import React from 'react'
import '../assets/GameStateContainer.css';
import GetRandomWord from './GetRandomWord';


export default function GameStateContainer({ state, allWords }) {
    switch (state) {
        case 'start':
            return (
                <>
                    <div>Let's start playing hangman!</div>
                </>
            );
        case 'playing':
            return (
                <>
                    <div>We are now playing hangman!</div>
                    <br />
                    <GetRandomWord wordBank={allWords} />
                </>
            );
        case 'end':
            return (
                <>
                    <div>You have lost hangman!</div>
                </>
            );
        default:
            console.error('Tried to load invalid game state: ' + state)
    }
}
