import React from 'react'
import '../assets/ChooseCategoryPage.css';
import { saveGameState } from './LoadSaveGame';

/**
 * Represents all the elements on the category choosing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the start page.
 */
export default function ChooseCategoryPage({ changePageFn, setNewCategory, setNewRandCategory, categoryList, toShort }) {
  return (
    <>
      <h1>Debug: Choose Category Page</h1>

      <br />
      <div className='pageTitle' >Select a Category</div>

      {/* List of buttons for player to choose their category */}
      {categoryList(false).map(category => {
        return (
          <>
            <button onClick={() => {
              setNewCategory(toShort(category)); // only works on 2nd click, the update was queued with the dom update.
              saveGameState('playing');
              changePageFn('playing');
            }
            }>{category}</button>
            <br />
          </>
        );
      })}
      <div>Or</div>
      <button onClick={() => {
        setNewRandCategory(); // only works on 2nd click
        saveGameState('playing');
        changePageFn('playing');
      }
      }>Choose Random Category</button>
    </>
  );
}
