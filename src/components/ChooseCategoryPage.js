import React from 'react'
import '../assets/ChooseCategoryPage.css';

/**
 * Represents all the elements on the category choosing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the start page.
 */
export default function ChooseCategoryPage({ changePageFn, setNewCategory, setNewRandCategory, categoryList, toShort }) {
  return (
    <>
      <div className='pageTitle' >Select a Category</div>

      {/* List of buttons for player to choose their category */}
      {categoryList(false).map(category => {
        return (
          <>
            <button onClick={() => {
              setNewCategory(toShort(category));
              changePageFn('playing');
            }
            }>{category}</button>
            <br />
          </>
        );
      })}

      <div>Or</div>

      {/* Button for player to choose random category */}
      <button onClick={() => {
        setNewRandCategory();
        changePageFn('playing');
      }
      }>Choose Random Category</button>
    </>
  );
}
