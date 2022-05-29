import React from 'react'
import '../assets/LosePage.css';
import { saveGameState } from './LoadSaveGame';

/**
 * Represents all the elements on the losing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the ending page.
 */
export default function LosePage({ changePageFn, currAnswer }) {
  return (
    <>
      <div className='pageTitle' >You Lost.</div>
      <div>The word was: {currAnswer}</div>
      <br />
      <button onClick={() => {
        saveGameState('start');
        changePageFn('start');
      }
      }>Try Again</button>
    </>
  );
}
