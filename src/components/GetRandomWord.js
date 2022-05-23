import React, { useState } from 'react';

/**
 * API:
 * descriptive string getCurrCategory
 * setCategory(string category) // triggered by button
 * string getCurrAnswer
 * string getNewAnswer
 */

// ----- declarations ----- 

/**
 * Used to get the correct words from the category in the bank.
 */
export const CATEGORIES = new Map([
    ["foreign", "Foreign words used in English"],
    ["names", "Gender neutral first names"],
    ["choc", "Things that go well with chocolate"],
    ["crush", "Things people do to impress their crush"]
]);

// the current answer and category
let answer, category, wordBank;

// ----- private functions used internally ----- 

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
 * Sets the answer word to be a random word from the given category 
    * 
    * @param {string} category the category of the word, 
    * which will be either "crush", "choc", "names", or "foreign"
    */
function getRandomWord(currCategory) {
    console.log("inside getRandomWord function");
    console.log(currCategory);
    console.log(wordBank);
    let newAnswer = getRandomElem(wordBank[CATEGORIES.get(currCategory)]); // something screwing up here

}

// ----- public functions used by other components ----- 

/**
 * Sets the word bank that random words will be picked from.
 * @param {Object} newWordBank - the word bank object that the answers will be picked from
 */
export function setWordbank(newWordBank) {
    wordBank = newWordBank;
}

/**
 * @returns {string} the current answer
 */
export function getCurrAnswer() {
    return answer;
}

/**
 * Generates a new answer using the existing category.
 * Plans: supposed to take in 0 parameters and use the state's category to change, but idk if i can do that and have the state's display element update as well.
 * 
 * @returns {string} the new answer
 */
export function getNewAnswer(thisCategory) {
    answer = getRandomWord(thisCategory); // returning undefined
    console.log(answer);
    return answer;
}

/**
 * @returns {string} the current category in its short form
 */
export function getCurrCategory() {
    return category;
}

/**
 * Sets the category of the answer words being generated.
 * 
 * @param {string} newCategory - either choc, names, foreign or crush.
 * @returns {string} the new category in its short form
 */
export function setCategory(newCategory) {
    if (CATEGORIES.has(newCategory)) {
        category = newCategory;
        return category;
    } else {
        console.error("Tried to set an invalid category \""
            + newCategory
            + "\". You can only set choc, names, foreign or crush.");
        return null;
    }
}
