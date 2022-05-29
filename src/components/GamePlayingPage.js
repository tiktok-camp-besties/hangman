import React from 'react'
import '../assets/GamePlayingPage.css';


/**
 * Represents all the elements on the playing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the playing page.
 */
export default function GamePlayingPage({ changePageFn, currCategory, currAnswer, toLong, saveOnGuess, changeAnswer }) {
  return (
    <>
      <h1>Debug: Game Playing Page</h1>
      <div>Replace this with the graphics</div>

      <div>Category: {toLong(currCategory)}</div>
      <div>Debug - Answer: {currAnswer}</div>
      <button onClick={() => changeAnswer(currCategory)}>Debug - Generate new answer</button>
      <button onClick={() => saveOnGuess()}>Save Page State. Wire this up to the guessing function.</button>

      <div>Replace this with the _ _ _ A _ _. Perhaps a 'playerGuess' component?</div>
      <div>Replace this with the Keyboard</div>
      <div>Change whether will go to win or lose page depending on game's outcome</div>
      <button onClick={() => {
        changePageFn('win');
      }
      }>Debug: Win Game</button>
    </>
  );
}
