import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🏁": "Chequered Flag",
  "🚩 ": " Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏴‍☠️": "Pirate Flag"
};
var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;

    var meaning = flagDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our  Data Base";
    }
    setMeaning(meaning);
  }

  function flagClickHandler(emoji) {
    var meaning = flagDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Funn With Flags!!
        <span role="img" aria-label="flags">
          ⛳
        </span>
      </h1>

      <input onChange={flagInputHandler} />

      <h2>{meaning}</h2>

      <h3>Flags we know</h3>
      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
