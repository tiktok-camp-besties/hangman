import React, {useState, useEffect} from 'react'
import '../assets/GamePlayingPage.css';
import GetRandomWord from './GetRandomWord';
import UseCurrentWord from './UseCurrentWord';
import {loadSavedStates, saveGameState} from './LoadSaveGame';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Figure from './Figure';
import { showNotification as show, checkWin } from '../helpers/helpers';
/**
 * Represents all the elements on the playing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the playing page.
 */
 const words = ['application', 'programming', 'interface', 'wizard'];
 let selectedWord = words[Math.floor(Math.random() * words.length)];

 export default function GamePlayingPage({ changePageFn, allWords }) {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correctLetters, wrongLetters, playable]);
    
    function playAgain() {
        setPlayable(true);

        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    const data = loadSavedStates();
    var category = data["category"];
    var word = data["word"];
    if (word === "") {
        return (
            <>
                <h1>Game Playing Page</h1>
                <div>We are now playing hangman!</div>
                <br />
                <div className= "game-container">
                <Figure wrongLetters= {wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters = {correctLetters} />
                </div>
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
