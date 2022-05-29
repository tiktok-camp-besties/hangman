import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import GameStartPage from "./GameStartPage";
import GamePlayingPage from "./GamePlayingPage";
import GameEndedPage from "./GameEndedPage";
import '../assets/App.css';
import {saveGameState, loadSavedStates} from "./LoadSaveGame";
import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";

import './App.css';

// for implementing loading and saving this week
// const LOCAL_PAGE_STORAGE_KEY = 'hangman.pageState';
// const LOCAL_GAME_STORAGE_KEY = 'hangman.gameState'
=======
import '../assets/App.css';
import GameStartPage from "./GameStartPage";
import GamePlayingPage from "./GamePlayingPage";
import WinPage from "./WinPage";
import LosePage from "./LosePage";
import ChooseCategoryPage from "./ChooseCategoryPage";
import { saveGameState, loadSavedStates } from "./LoadSaveGame";
import { getRandomWord, getRandomCategory, getAllCategories, toShort, toLong } from "./WordCategoryPicker";
>>>>>>> main

/**
 * Creates everything that you see on the webpage.
 * 
 * @returns The generated html css of all the components combined
 */
function App() {

<<<<<<< HEAD

  
=======
>>>>>>> main
  // ----- declarations ----- 

  // React-tracked variables
  // the pageState on launch will be set to 'start'
  const [pageState, setPageState] = useState('start');
  const [category, setCategory] = useState('names'); // shortNames of the category
  const [answer, setAnswer] = useState('names');
  const [lives, setLives] = useState(7);
  const [usedLetters, setUsedLetters] = useState('');

  // An object containing all the words to choose from
  const wordBank = require('./wordbank.json');


  // ----- hooks ----- 

  /**
   * Set up the game when the page loads.
   */
  useEffect(() => {
    let data = loadSavedStates();
    setPageState(data["page"]);
    setCategory(data["category"]);
    setAnswer(data["word"]);
    setLives(data["lives"]);
    setUsedLetters(data["usedletters"]);
  }, []);

  // ----- functions -----

  /**
   * To be called when player makes a guess.
   * Saves the page's state to cookies so that player does not lose progress when they reload.
   */
  function saveOnGuess() {
    saveGameState(pageState, category, answer, lives, usedLetters);
  }

  /**
   * Changes the page to the specified one.
   * The setPageState function has been defined by the useState hook API
   * 
   * @param {string} nextPage - The next page to load
   */
  function handlePageChange(nextPage) {
    saveGameState(nextPage, category, answer, lives, usedLetters);
    setPageState(prevPage => {
      return nextPage;
    });
  }

  /**
   * Changes the category to the specified one, in shortName format.
   * Note: relies on handleAnswerChange to save state
   * 
   * @param {string} newCategory the short name of the new category
   */
  function handleCategoryChange(newCategory) {
    setCategory(prevCategory => { // apparently queues the update to happen when on the next DOM refresh.
      return newCategory;
    });
    handleAnswerChange(newCategory);
  }

  /**
   * Changes the category to a random new category, saved as its shortName.
   * Note: relies on handleAnswerChange to save state
   */
  function handleRandomCategoryChange() {
    let randCat = getRandomCategory();
    setCategory(prevCategory => {
      return randCat;
    });
    handleAnswerChange(randCat);
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
        saveGameState(pageState, newCategory, newWord, lives, usedLetters);
        return newWord;
      }
    });
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
        saveOnGuess={saveOnGuess}
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
