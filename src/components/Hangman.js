import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import HangmanState from "./HangmanStates";
import { Stack } from "react-bootstrap";
import { useEffect } from "react";

import HelperBtn from "./Popup";
import Message from "./Alert";
// Create an array for the letters that have been guessed that are wrong
// let wrongGuesses = [];
// Create a hint component

const Hangman = () => {
  // const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [word, setWord] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState([]);
  // const [wordLength, setWordLength] = useState(0);
  // const [show, setShow] = useState(false);
  // const [image, setImage] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [message, setMessage] = useState("");
  const [play, setPlay] = useState(false);

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
    //  console.log(arr[random] + "random word");
    setWord(arr[random].toUpperCase());
  };

  // const buttonVariant = (key) => {
  //   if (guesses.includes(key)) {
  //     return "success";
  //   }
  //   if (wrongGuesses.includes(key)) {
  //     return "danger";
  //   }
  //   return "outline-dark";
  // };
  //
  // // console.log(wrongGuesses + " wrongGuesses");
  // // Get the word as an array
  // // If player guesses wrong change the image to the next state
  // const maskWord = word
  //   .split("")
  //   .map((letter) => (guesses.includes(letter) ? letter : "_"))
  //   .join(" ");
  // // console.log(maskWord + "maskWord");
  //
  // // Wrong guesses
  // const handleImage = (letter) => {
  //   if (!word.includes(letter)) {
  //     setCurrentImage((currentImage + 1) % HangmanState.length);
  //     console.log(currentImage + " currentImage");
  //
  //     if (currentImage >= 9) {
  //       setPlay(false);
  //       setMessage("You lose!");
  //     }
  //   }
  // };

  const buttonVariant = (key) => {
    if (guesses.includes(key)) return "success";
    if (wrongGuesses.includes(key)) return "danger";
    return "outline-dark";
  };

  const maskWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  const handleImage = (letter) => {
    if (!word.includes(letter)) {
      setCurrentImage(currentImage + (1 % HangmanState.length));
      if (currentImage >= 9) {
        setPlay(false);
        setMessage("You lose!");
      } else if (currentImage < 9) {
        setPlay(true);
      }
    }
  };

  console.log(word + " word");
  console.log(maskWord + " maskWord");
  console.log(typeof guesses + " guesses");

  // If start button is not clicked then the game will not start

  // If the guess letters in the array are the same as the word the player wins

  // Bug: When loading the game alert the player they have won
  // Bug: Too many things being rendered at once so the game breaks when i set more states.

  // another example of the same thing
  // if (maskWord === word) {
  //   alert("You win!");
  // }

  // if the images reaches the end of the array then the game is over
  // if (currentImage >= 9) {
  //   alert("You lose!");
  // }

  return (
    <div
      className={
        "bg-light border border-dark w-75 d-flex flex-column align-items-center mx-auto p-3 mt-3 mb-3 "
      }
      style={{ maxWidth: "550px" }}
    >
      {/*Update this with a message*/}
      <h1>Hangman {message}</h1>
      <HelperBtn />
      {/*Message will only appear when user error*/}
      {/*<Message />*/}
      {/*This a tag will trigger the canvas that will give instructions and a hint*/}

      <img
        className={"mx-auto"}
        src={HangmanState[currentImage]}
        alt={"Hangman"}
        style={{ height: "75%", width: "75%", padding: "5%" }}
      />
      <h1>{word}</h1>
      <h2>{maskWord}</h2>
      <Stack
        direction={"horizontal"}
        gap={3}
        className={
          "flex-wrap align-items-center justify-content-center p-4 my-2"
        }
      >
        {/* KEYBOARD */}

        {keys.map((key, index) => (
          <Button
            variant={buttonVariant(key)}
            key={index}
            disabled={guesses.includes(key) || wrongGuesses.includes(key)}
            onClick={() => {
              handleImage(key);
              if (word.includes(key)) {
                setGuesses([...guesses, key]);
                // are the letters the same as the word : true or false
              } else {
                setWrongGuesses([...wrongGuesses, key]);

                // wrongGuesses.push(key);
                // Change the image to the next state
              }
            }}
          >
            {key}
          </Button>
        ))}
      </Stack>

      <Stack direction={"horizontal"} gap={3} className={"mx-auto"}>
        <Button variant={"outline-success"} onClick={getWord}>
          Start
        </Button>
        <Button variant={"warning"} onClick={() => window.location.reload()}>
          Restart
        </Button>
      </Stack>
    </div>
  );
};

export default Hangman;

// Bugs: When game is finished we want to stop keys from being pressed
// Todo: Add a message component that will appear when the user makes a mistake
// I have to many things being rendered at once so the game breaks when i set more states.
// Todo: Pressing strat again will change the word. We want start activated once per game.
// Change the state of the main heading.

// Start button and load screen - We need to clear this up or just have a loading screen at the start then change to the application.
