/**
 * WordCategoryPicker
 * 
 * Provides functions that pick a random word or random category. 
 */

/**
 * A map of shortNames to longNames of categories.
 * Used to get the correct words from the category in the bank.
 * 
 * things that use short name:
 * category state
 * button-returned category
 * randomly generated categories
 * 
 * things that use long name:
 * the headers in the wordbank itself
 * displaying to the user
 */
const CATEGORIES = new Map([
  ["foreign", "Foreign words used in English"],
  ["names", "Gender neutral first names"],
  ["choc", "Things that go well with chocolate"],
  ["crush", "Things people do to impress their crush"]
]);

/**
 * Sets the answer word to be a random word from the given category 
 * 
 * @param {string} categoryShort the shortName of the category of the word, 
 * which can be either "crush", "choc", "names", or "foreign", and nothing else.
 * @param {object} wordBank the JSON file the words and categories are loaded from
 * @returns a random word from the given category
 */
export function getRandomWord(categoryShort, wordBank) {
  if (!CATEGORIES.has(categoryShort)) {
    console.error("WordCategoryPicker.js: Tried to get a word from an invalid category: " + categoryShort);
  }

  let wordsInThisCategory = wordBank[CATEGORIES.get(categoryShort)];
  return getRandomElem(wordsInThisCategory);
}

/**
 * Returns the shortName of a random category
 * 
 * @returns the shortName of a random category
 */
export function getRandomCategory() {
  return getRandomElem(getAllCategories(true));
}

/**
 * Returns an array of all the categories the answer can be taken from.
 * 
 * @param {boolean} isShortName whether the returned names are short or long.
 * @returns an array of all the categories in the CATEGORIES map
 */
export function getAllCategories(isShortName) {
  const allCats = [];
  let group = isShortName ? CATEGORIES.keys() : CATEGORIES.values();

  for (let cat of group) {
    allCats.push(cat);
  }
  return allCats;
}

/**
 * Converts the short name of the category to its long name.
 * 
 * @param {string} shortName of the category
 * @returns the long name of the category
 */
export function toLong(shortName) {
  return CATEGORIES.get(shortName);
}

/**
 * Converts the long name of the category to its short name.
 * 
 * @param {string} longName of the category
 * @returns the short name of the category
 */
export function toShort(longName) {
  return [...CATEGORIES].find(([key, val]) => val == longName)[0];
}

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
