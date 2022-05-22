import React, { useState, useEffect } from "react";
import GameStateContainer from "./GameStateContainer";

// for loading and saving in the future
// const LOCAL_GAME_STORAGE_KEY = 'hangman.gameState';
// const LOCAL_ROUND_STORAGE_KEY = 'hangman.roundState'

/**
 * Creates everything that you see on the webpage.
 * 
 * @returns The generated html css of all the components combined
 */
function App() {

  // ----- declarations ----- 

  // for debug, set the default state to playing. 
  // for the real app, it should start with the "start" state
  const [gameState, setGameState] = useState("playing");

  // An object containing all the words to choose from
  const wordBank = require('./wordbank.json');

  // ----- hooks ----- 

  /**
   * Set up the game when the page loads.
   */
  useEffect(() => {
    // loadSavedStates();
  }, []);

  // to add: save game when the state changes

  // ----- functions ----- 

  /**
   * To be implemented.
   * Loads the game's and round's state from 
   * the user's local storage when the page loads
   */
  function loadSavedStates() {

  }

  // ----- main html on page ----- 
  return (
    <GameStateContainer state={gameState} allWords={wordBank} />
  );
}

export default App;
