import React, { useState } from 'react'; // react will only re-render components when they update if they use a state.
import '../assets/GamePlayingPage.css';
import { getNewAnswer, CATEGORIES, setWordbank } from './GetRandomWord';


/**
 * Represents all the elements on the playing page.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML of the playing page.
 */
export default function GamePlayingPage({ changePageFn, allWords }) {
    // ----- declarations ----- 

    // tell React to update components when answer is changed.
    const [answer, changeAnswer] = useState('');
    const [category, changeCategory] = useState(''); // change this to the long-form category cuz the display will be of the long-form one
    // also, the display needs to convert it to all caps
    // qn: can a state change in a separate class update a component in this class? these 2 declarations really belong in getrandomword not here. The many functions should be moved over to that class

    setWordbank(allWords);

    function setNewAnswer() {
        changeAnswer(prevAnswer => {
            return getNewAnswer(category);
        });
    }

    function setNewCategory(newCategory) {
        if (CATEGORIES.has(newCategory)) {
            changeCategory(prevCategory => {
                return newCategory;
            });
        } else {
            console.error("Tried to set an invalid category \""
                + newCategory
                + "\". You can only set choc, names, foreign or crush.");
            return null;
        }
    }

    function setCatChoc() {
        setNewCategory("choc");
    }

    function setCatNames() {
        setNewCategory("names");
    }

    function setCatForeign() {
        setNewCategory("foreign");
    }

    function setCatCrush() {
        setNewCategory("crush");
    }

    return (
        <>
            <h1>Game Playing Page</h1>
            <div>We are now playing hangman!</div>
            <br />

            {/* random word displayer and controls */}
            <div>Category: {category}</div>
            <button onClick={() => setCatChoc()}>Change to choc category</button>
            <button onClick={() => setCatNames()}>Change to names category</button>
            <button onClick={() => setCatCrush()}>Change to crush category</button>
            <button onClick={() => setCatForeign()}>Change to foreign category</button>
            <br />
            <button onClick={() => setNewAnswer()}>Generate next word</button>
            <br />
            <br />
            <div>The answer is: {answer}</div>

            <br />
            <button onClick={() => changePageFn('ended')}>Finish Game</button>
        </>
    );
}
