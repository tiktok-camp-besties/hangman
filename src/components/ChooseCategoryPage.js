import React from 'react'
import '../assets/ChooseCategoryPage.css';
import { saveGameState } from './LoadSaveGame';
import { getAllCategories, setCategory } from './WordCategoryPicker';

/**
 * Represents all the elements on the category choosing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the start page.
 */
export default function ChooseCategoryPage({ changePageFn }) {
  return (
    <>
      <h1>Debug: Choose Category Page</h1>

      <br />
      <div className='pageTitle' >Select a Category</div>
      {/* drop down list component with programatically loaded sections from the text file */}
      {getAllCategories().map(category => {
        return (
          <>
            <button onClick={() => {
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
        // choose a random category
        saveGameState('playing');
        changePageFn('playing');
      }
      }>Random Category</button>
    </>
  );
}
