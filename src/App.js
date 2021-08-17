import { useState } from "react";
import "./styles.css";

var sportsDictionary = {
  "⚽": "Football",
  "⚾": "Baseball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🎾": "Tennis",
  "🎳": "Bowling",
  "🏏": "Cricket",
  "🏸": "Badminton",
  "🥊": "Boxing",
  "🏑": "Hockey",
  "⛳": "Golf",
  "🛹": "Skateboard"
};

var sportInDB = Object.keys(sportsDictionary);

export default function App() {
  const [emojiInput, setEmojiInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    if (userInput in sportsDictionary)
      setEmojiInput(sportsDictionary[userInput]);
    else setEmojiInput("Not in Database");
  }

  function emojiClickHandler(item) {
    setEmojiInput(sportsDictionary[item]);
  }

  return (
    <div className="App">
      <h1>🏅 SportsPedia 🏅</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter your Emoji"
      ></input>
      <div style={{ margin: "1rem", fontWeight: "bolder", fontSize: "1.5rem" }}>
        {emojiInput}
      </div>
      <h2>Emojis We know</h2>
      <div>
        {sportInDB.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              style={{
                margin: "0.5rem",
                padding: "0.5rem 0.5rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
