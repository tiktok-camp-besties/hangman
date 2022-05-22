import React from 'react'

const CATEGORIES = new Map([
    ["foreign", "Foreign words used in English"],
    ["names", "Gender neutral first names"],
    ["choc", "Things that go well with chocolate"],
    ["crush", "Things people to impress their crush"]
]);

export default function GetRandomWord({ wordBank }) {
    // functions

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
     * Chooses a random word from the given category 
     * 
     * @param {string} key the category of the word, 
     * which will be either "crush", "choc", "names", or "foreign"
     * @returns a random word from the category
     */
    function getRandomWord(key) {
        return getRandomElem(wordBank[CATEGORIES.get(key)]);
    }

    // ----- html of component -----
    const currKey = "choc"; // let user choose in next iteration
    return (
        <>
            <div>Category: {CATEGORIES.get(currKey)}</div>
            <div>{getRandomWord(currKey)}</div>
        </>
    );
}
