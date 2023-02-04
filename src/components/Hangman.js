import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import HangmanState from "./HangmanStates";
import { Stack } from "react-bootstrap";
import { useEffect } from "react";

import HelperBtn from "./Popup";
import Message from "./Alert";
// Create an array for the letters that have been guessed that are wrong
let wrongGuesses = [];
// Create a hint component

const Hangman = () => {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [word, setWord] = useState("");
  const [wordLength, setWordLength] = useState(0);

  // If the player loses that must start again.
  const keys = [
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
  // We want to use arr.map to create a new array with the letters of the word
  const arr = ["apple", "banana", "orange", "grape"];

  // Get a random word from the array
  const getWord = () => {
    let random = Math.floor(Math.random() * arr.length);
    console.log(arr[random] + "random word");
    setWord(arr[random].toUpperCase());
  };

  // Get the word as an array
  // If player guesses wrong change the image to the next state
  const maskWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");
  console.log(maskWord + "maskWord");

  return (
    <div
      className={
        "bg-light w-75 d-flex flex-column align-items-center mx-auto mt-3 mb-3 max-w-sm-600  max-w-md-600 "
      }
      style={{ maxWidth: "550px" }}
    >
      {/*Update this with a message*/}
      <h1>Hangman</h1>
      <HelperBtn />
      <Message />
      {/*This a tag will trigger the canvas that will give instructions and a hint*/}
      <Stack direction={"vertical"} gap={2}>
        <img
          className={"mx-auto"}
          src={HangmanState.state2}
          alt={"Hangman"}
          style={{ height: "75%", width: "75%", padding: "5%" }}
        />
        <input type="text" className={"w-50 mx-auto"} />
        {keys.map((key, index) => (
          <Button
            key={index}
            onClick={() => {
              if (word.includes(key)) {
                setGuesses([...guesses, key]);
              } else {
                wrongGuesses.push(key);
                //     Change the image to the next state
              }
            }}
          >
            {key}
          </Button>
        ))}
        }
        <Stack direction={"horizontal"} gap={3} className={"mx-auto"}>
          <Button onClick={getWord}>Get Word</Button>
          <Button>Restart</Button>
        </Stack>
      </Stack>
      <p>{maskWord}</p>
      <p>{wordLength}</p>
      <p>{guess}</p>
    </div>
  );
};

export default Hangman;
