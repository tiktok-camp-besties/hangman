import React, { useState } from 'react';
import { saveGameState } from './LoadSaveGame';

/**
 * React does not know that it needs to re-render the answer component
 * unless I use the react state. So the displayed answer will only change when 
 * React watches for the state of the answer variable to change.
 */

/**
 * TODO: Revamp Required.
 * need to be able to 
 * - return the answer to multiple pages
 * - list all categories from workbank
 * - set categories
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

export function getAllCategories() {
    const allCats = [];
    for (let longName of CATEGORIES.values()) {
        allCats.push(longName);
    }
    return allCats;
}

/**
 * Contains all the functionality to randomly generate a word from the given category.
 * 
 * @param {prop[]} props - variables being passed into this component
 * @returns HTML to control the random generation of words. Also displays the word.
 */
default function GetRandomWord({ wordBank }) {

    // ----- functions ----- 

    /**
     * Returns a random element from an array.
     * Referenced from Corey on stack overflow
     * https://stackoverflow.com/a/5915122/16777554
     * 
     * @param {*} array to pick the element from
     */
    function getRandomElem(array) {
        const randFloatingIndex = Math.random() * array.length;
        const randIndex = Math.floor(randFloatingIndex);
        return array[randIndex];
    }

    /**
     * called by the displayer function
     * Sets the answer word to be a random word from the given category 
     * 
     * @param {string} category the category of the word, 
     * which will be either "crush", "choc", "names", or "foreign"
     */
    function getRandomWord(category) {
        let newAnswer = getRandomElem(wordBank[CATEGORIES.get(category)]);

        saveGameState("playing", category, newAnswer);
        setAnswer(prevAnswer => {
            return newAnswer;
        });
    }
}
