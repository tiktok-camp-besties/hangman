import React from 'react'
import '../assets/Keyboard.css';

export default function Keyboard({ }) {
  return (
    <>
      <h1>Game Ended Page</h1>
      <div>You have completed the hangman game! You have either saved the guy or lost all of his limbs. Click the button below to start a new game.</div>
      <button type="button" class="keys" id="q-key"> Q </button>
      <button type="button" class="keys" id="w-key"> W </button>
      <button type="button" class="keys" id="e-key"> E </button>
      <button type="button" class="keys" id="r-key"> R </button>
      <button type="button" class="keys" id="t-key"> T </button>
      <button type="button" class="keys" id="y-key"> Y </button>
      <button type="button" class="keys" id="u-key"> U </button>
      <button type="button" class="keys" id="i-key"> I </button>
      <button type="button" class="keys" id="o-key"> O </button>
      <button type="button" class="keys" id="p-key"> P </button>
      <br />
      <button type="button" class="keys" id="a-key"> A </button>
      <button type="button" class="keys" id="s-key"> S </button>
      <button type="button" class="keys" id="d-key"> D </button>
      <button type="button" class="keys" id="f-key"> F </button>
      <button type="button" class="keys" id="g-key"> G </button>
      <button type="button" class="keys" id="h-key"> H </button>
      <button type="button" class="keys" id="j-key"> J </button>
      <button type="button" class="keys" id="k-key"> K </button>
      <button type="button" class="keys" id="l-key"> L </button>
      <br />
      <button type="button" class="keys" id="z-key"> Z </button>
      <button type="button" class="keys" id="x-key"> X </button>
      <button type="button" class="keys" id="c-key"> C </button>
      <button type="button" class="keys" id="v-key"> V </button>
      <button type="button" class="keys" id="b-key"> B </button>
      <button type="button" class="keys" id="n-key"> N </button>
      <button type="button" class="keys" id="m-key"> M </button>
    </>
  );
}
