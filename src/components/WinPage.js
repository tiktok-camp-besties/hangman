import React from 'react'
import '../assets/WinPage.css';

/**
 * Represents all the elements on the winning page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the ending page.
 */
export default function WinPage({ changePageFn, currAnswer }) {
  return (
    <>
      <div className='pageTitle' >You Won!</div>
      <br />
      <div>The word was: {currAnswer}</div>
      <button onClick={() => {
        changePageFn('start');
      }
      }>Next Word</button>
    </>
  );
}
