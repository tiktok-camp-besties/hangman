import React, { useState, useEffect } from 'react'
import '../assets/GamePlayingPage.css';
import { loadSavedStates, saveGameState } from './LoadSaveGame';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Figure from './Figure';
import { showNotification as show, checkWin } from '../helpers/helpers';
import Keyboard from './Keyboard'
import WinPage from './WinPage';


/**
 * Represents all the elements on the playing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the playing page.
 */

export default function GamePlayingPage({ changePageFn, currCategory, currAnswer, toLong, saveOnGuess, changeAnswer }) {
  let selectedWord = currAnswer;
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

  }

  function changePageOnEnd(correctLetters, wrongLetters, selectedWord, setPlayable, playAgain) {
    let playable = true;
    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
      playable = false;
      changePageFn('win');

    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
      playable = false;
      changePageFn('lose');

    }
  }

  return (
    <>
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />

      <div>note: Type to input</div>
      <div>Category: {toLong(currCategory)}</div>
      {changePageOnEnd(correctLetters, wrongLetters, selectedWord)}
      <Keyboard />
    </>
  );
}
