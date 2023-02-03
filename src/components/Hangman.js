import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import HangmanState from "./HangmanStates";
import { Stack } from "react-bootstrap";

const Hangman = () => {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [word, setWord] = useState("");
  const [wordArray, setWordArray] = useState([]);
  const [wordLength, setWordLength] = useState(0);
  const arr = ["apple", "banana", "orange", "grape"];

  // Get a random word from the array
  const getWord = () => {
    let random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
    setWord(arr[random]);
  };

  // Get the length of the word
  const getWordLength = () => {
    setWordLength(word.length);
  };

  // Get the word as an array
  const getWordArray = () => {
    setWordArray(word.split(""));
  };

  // Get the word as an array
  // If player guesses wrong change the image to the next state
  const getGuess = (e) => {
    setGuess(e.target.value);
  };
  //           {/*Make a function that circles though the states if guesses goes up*/}
  return (
    <div className={"bg-light w-75  "}>
      <h1>Hangman</h1>
      <Stack direction={"vertical"} gap={2}>
        <img
          className={"mx-auto"}
          src={HangmanState.state2}
          alt={"Hangman"}
          style={{ height: "75%", width: "75%", padding: "5%" }}
        />
        <input type="text" onChange={getGuess} />

        <Button className={"w-75"} onClick={getWord}>
          Get Word
        </Button>
        <Button onClick={getWordLength}>Get Word Length</Button>
        <Button onClick={getWordArray}>Get Word Array</Button>
      </Stack>
      <p>{word}</p>
      <p>{wordLength}</p>
      <p>{wordArray}</p>
      <p>{guess}</p>
    </div>
  );
};

export default Hangman;
