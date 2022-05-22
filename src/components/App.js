import React, { useState, useEffect } from "react";
import GameStartPage from "./GameStartPage";
import GamePlayingPage from "./GamePlayingPage";
import GameEndedPage from "./GameEndedPage";
import '../assets/App.css';

// for implementing loading and saving this week
// const LOCAL_PAGE_STORAGE_KEY = 'hangman.pageState';
// const LOCAL_GAME_STORAGE_KEY = 'hangman.gameState'

/**
 * Creates everything that you see on the webpage.
 * 
 * @returns The generated html css of all the components combined
 */
function App() {

  // ----- declarations ----- 

  // the pageState on launch will be set to 'start'
  const [pageState, setPageState] = useState("start");

  // An object containing all the words to choose from
  const wordBank = require('./wordbank.json');

  // ----- hooks ----- 

  /**
   * To be implemented.
   * Set up the game when the page loads.
   */
  useEffect(() => {
    // loadSavedStates();
  }, []);

  // to add: save game when the state changes

  // ----- functions ----- 

  /**
   * To be implemented.
   * Loads the page's and game's state from 
   * the user's local storage when the page loads
   */
  function loadSavedStates() {

  }

  /**
   * Changes the page to the specified one.
   * The setPageState function has been defined by the useState hook API
   * 
   * @param {string} nextPage - The next container to load
   */
  function changePage(nextPage) {
    setPageState(prevPage => {
      return nextPage;
    });
  }

  // ----- main html on page ----- 

  // Display either the start, playing or end page at any time.
  switch (pageState) {
    case 'start':
      return (
        <GameStartPage changePageFn={changePage} />
      );
    case 'playing':
      return (
        <GamePlayingPage
          changePageFn={changePage}
          allWords={wordBank}
        />
      );
    case 'end':
      return (
        <GameEndedPage changePageFn={changePage} />
      );
    default:
      console.error('Tried to load \'' + pageState + '\' which is an invalid page state.');
  }
}

export default App;
