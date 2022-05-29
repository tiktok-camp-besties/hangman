import React, { useState, useEffect } from "react";
import '../assets/App.css';
import GameStartPage from "./GameStartPage";
import GamePlayingPage from "./GamePlayingPage";
import WinPage from "./WinPage";
import LosePage from "./LosePage";
import ChooseCategoryPage from "./ChooseCategoryPage";
import { saveGameState, loadSavedStates } from "./LoadSaveGame";
import { getRandomWord, getRandomCategory, getAllCategories, toShort, toLong } from "./WordCategoryPicker";

/**
 * Creates everything that you see on the webpage.
 * 
 * @returns The generated html css of all the components combined
 */
function App() {

  // ----- declarations ----- 

  // React-tracked variables
  // the pageState on launch will be set to 'start'
  const [pageState, setPageState] = useState("start");
  const [category, setCategory] = useState('names'); // shortNames of the category
  const [answer, setAnswer] = useState('names'); // why does it only work when i start with a valid default value?

  // An object containing all the words to choose from
  const wordBank = require('./wordbank.json');


  // ----- hooks ----- 

  /**
   * Set up the game when the page loads.
   */
  useEffect(() => {
    let data = loadSavedStates();
    setPageState(data["page"]);
  }, []);

  // ----- functions -----

  /**
   * Changes the page to the specified one.
   * The setPageState function has been defined by the useState hook API
   * 
   * @param {string} nextPage - The next page to load
   */
  function handlePageChange(nextPage) {
    setPageState(prevPage => {
      return nextPage;
    });
    // saveGameState("playing", category, newAnswer); what should i put in here? likewise for btm 2
  }

  /**
   * Changes the category to the specified one, in shortName format.
   * 
   * @param {string} newCategory the short name of the new category
   */
  function handleCategoryChange(newCategory) {
    setCategory(prevCategory => { // apparently queues the update to happen when on the next DOM refresh.
      return newCategory;
    });
    handleAnswerChange(newCategory);
    // saveGameState("playing", category, newAnswer);
  }

  /**
   * Changes the category to a random new category, saved as its shortName.
   */
  function handleRandomCategoryChange() {
    let randCat = getRandomCategory();
    setCategory(prevCategory => {
      return randCat;
    });
    handleAnswerChange(randCat);
    // saveGameState("playing", category, newAnswer);
  }

  /**
   * Sets the answer to a new answer from the current category.
   */
  function handleAnswerChange(newCategory) {
    let newWord = getRandomWord(newCategory, wordBank); // the category being used is the old one
    setAnswer(prevAnswer => {
      if (prevAnswer === newWord) {
        handleAnswerChange(newCategory);
      } else {
        return newWord;
      }
    });
    // saveGameState("playing", category, newAnswer);
  }

  // ----- main html on page ----- 

  // Display either the start, playing or end page at any time.
  switch (pageState) {
    case 'start':
      return <GameStartPage changePageFn={handlePageChange} />;
    case 'category':
      return <ChooseCategoryPage
        changePageFn={handlePageChange}
        setNewCategory={handleCategoryChange}
        setNewRandCategory={handleRandomCategoryChange}
        categoryList={getAllCategories}
        toShort={toShort}
      />;
    case 'playing':
      return <GamePlayingPage
        changePageFn={handlePageChange}
        currCategory={category}
        currAnswer={answer}
        toLong={toLong}
        changeAnswer={handleAnswerChange}
      />;
    case 'win':
      return <WinPage
        changePageFn={handlePageChange}
        currAnswer={answer}
      />;
    case 'lose':
      return <LosePage
        changePageFn={handlePageChange}
        currAnswer={answer}
      />;
    default:
      console.error('Tried to load \'' + pageState + '\' which is an invalid page state.');
  }
}

export default App;
