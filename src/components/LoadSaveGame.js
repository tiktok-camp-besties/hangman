// ----- functions ----- 

/**
 * Saves the page and game state.
 */
export function saveGameState(page = "start", category = "", word = "", lives = 7, usedLetters = "") {
  document.cookie = "page=" + page;
  document.cookie = "category=" + category;
  document.cookie = "word=" + word;
  document.cookie = "lives=" + lives;
  document.cookie = "usedletters=" + usedLetters;
  console.log(document.cookie);
}

/**
 * Loads the page's and game's state from 
 * the user's local storage when the page loads
 */
export function loadSavedStates() {
  const temp = document.cookie.split(";").map(x => x.trim().split("="));
  let dict = {};
  temp.forEach(function (item, index) {
    dict[item[0]] = item[1];
  });

  // If the cookie does not exist, load start page.
  if (document.cookie === "") {
    dict["page"] = "start";
  }

  return dict;
}
