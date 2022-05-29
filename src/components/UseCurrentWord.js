import React, { useState } from 'react';
import getRandomWord from './WordCategoryPicker';
import { saveGameState } from './LoadSaveGame';


/**
 * React does not know that it needs to re-render the answer component
 * unless I use the react state. So the displayed answer will only change when 
 * React watches for the state of the answer variable to change.
 */

/**
 * Used to get the correct words from the category in the bank.
 */
const CATEGORIES = new Map([
  ["foreign", "Foreign words used in English"],
  ["names", "Gender neutral first names"],
  ["choc", "Things that go well with chocolate"],
  ["crush", "Things people do to impress their crush"]
]);

/**
 * Contains all the functionality to randomly generate a word from the given category.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML to control the random generation of words. Also displays the word.
 */
export default function GetCurrentWord({ category, word }) {
  // ----- declarations ----- 

  // tell React to update components when answer is changed.
  const [answer] = useState('');

  // ----- functions ----- 


  // ----- html of component -----
  const currKey = category;
  return (
    <>
      <h2>Get Random Word Component</h2>
      <div>Category: {CATEGORIES.get(currKey)}</div>
      <br />
      <button onClick={() => {
        saveGameState("playing");

        // Unknown bug: does not move to start page after refreshing on ended page.
        document.location = "/"; // Forced reload page
      }
      }>Generate next word</button>
      <br />
      <br />
      <div>The answer is: {word}</div>

    </>
  );
}
