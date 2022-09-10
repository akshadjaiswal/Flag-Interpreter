import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flag",
  "🏴 ": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag",
  "🇮🇳": "Indian Flag",
  "🇮🇪": "Ireland Flag",
  "🇪🇬": "Egypt Flag",
  "🇫🇷": "France Flag"
};
var flagWeKnow = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;

    var meaning = flagDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function flagClickHandler(emoji) {
    var meaning = flagDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Flag Interpreter</h1>
      <input onChange={flagInputHandler} />
      <h2> {meaning}</h2>
      <h3>Flags we know </h3>
      {flagWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => flagClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
