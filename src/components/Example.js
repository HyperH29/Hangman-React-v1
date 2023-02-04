import React, { useEffect, useState } from "react";

export default function Hangman({ duration = 10000 }) {
  const word = "Hangman".toUpperCase();
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeUp(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, []);

  const maskedWord = word
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");
  return (
    <div>
      <p>{maskedWord}</p>
      {alphabets.map((alphabet, index) => (
        <button
          key={index}
          onClick={() => {
            if (word.includes(alphabet)) {
              setCorrectGuesses([...correctGuesses, alphabet]);
            }
          }}
        >
          {alphabet}
        </button>
      ))}
      {timeUp ? <p>You lost!</p> : !maskedWord.includes("_") && <p>You won!</p>}
    </div>
  );
}
// This example helped me understand how to use the useEffect hook
// https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral
// This is what we are looking for:
// We can add color changes when pressed and when correct or incorrect
