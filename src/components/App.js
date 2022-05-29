import React, { useState } from "react";
import GameStartPage from "./GameStartPage";
import GamePlayingPage from "./GamePlayingPage";
import WinPage from "./WinPage";
import LosePage from "./LosePage";
import '../assets/App.css';
import { saveGameState, loadSavedStates } from "./LoadSaveGame";
import ChooseCategoryPage from "./ChooseCategoryPage";

/**
 * Creates everything that you see on the webpage.
 * 
 * @returns The generated html css of all the components combined
 */
function App() {

  // ----- declarations ----- 

  // the pageState on launch will be set to 'start'
  const [pageState, setPageState] = useState("start");
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');

  // An object containing all the words to choose from
  const wordBank = require('./wordbank.json');

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

  // ----- hooks ----- 

  /**
   * Set up the game when the page loads.
   */
  var data = loadSavedStates();
  pageState = data["page"];

  // ----- main html on page ----- 

  // Display either the start, playing or end page at any time.
  switch (pageState) {
    case 'start':
      return <GameStartPage changePageFn={changePage} />;
    case 'category':
      return <ChooseCategoryPage changePageFn={changePage} />;
    case 'playing':
      return (
        <GamePlayingPage
          changePageFn={changePage}
          allWords={wordBank} />
      );
    case 'win':
      return <WinPage changePageFn={changePage} />;
    case 'lose':
      return <LosePage changePageFn={changePage} />;
    default:
      console.error('Tried to load \'' + pageState + '\' which is an invalid page state.');
  }
}

export default App;
