import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import HangmanState from "./HangmanStates";
import { Stack } from "react-bootstrap";
import { useEffect } from "react";
import HelperBtn from "./Popup";

const Hangman = () => {
  const [guessLetters, setGuessLetters] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [currentImageIndex, setCurrentImage] = useState(0);
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  // If the player loses that must start again.
  // We want to use arr.map to create a new array with the letters of the word
  const arr = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "watermelon",
    "pineapple",
  ];

  // Get a random word from the array
  const getWord = () => {
    let random = Math.floor(Math.random() * arr.length);
    //  console.log(arr[random] + "random word");
    setTargetWord(arr[random].toUpperCase());
    setIsPlaying(true);
  };

  // When player clicks on the letter, the button will change color to green ? good : red ? wrong
  const buttonVariant = (key) => {
    if (guessLetters.includes(key)) return "success";
    if (wrongGuesses.includes(key)) return "danger";
    return "outline-dark";
  };

  // Using Ascii code to get the letters of the alphabet then map them to the buttons
  const getKeys = () => {
    const results = [];
    for (let i = 65; i <= 90; i++) {
      let key = String.fromCharCode(i);

      results.push(
        <Button
          variant={buttonVariant(key)}
          key={i}
          disabled={guessLetters.includes(key) || wrongGuesses.includes(key)}
          onClick={() => guessLetterClickHandler(key)}
        >
          {key}
        </Button>
      );
    }

    return results;
  };

  const maskedWord = targetWord
    .split("")
    .map((letter) => (guessLetters.includes(letter) ? letter : "_"))
    .join(" ");

  // Show table to console list of the letters
  // useEffect(() => {
  //   console.table({ maskedWord, guessLetters, wrongGuesses, targetWord })
  // })

  // When the image index is greater than 9, the player loses and the game is over.
  const handleImage = useCallback(
    (letter) => {
      if (!targetWord.includes(letter)) {
        setCurrentImage(currentImageIndex + (1 % HangmanState.length));
        if (currentImageIndex >= 9) {
          setIsPlaying(false);
          setMessage("You lose!");
        }
      } else {
        setIsPlaying(true);
      }
    },
    [currentImageIndex, targetWord]
  );

  // If the player wins, the game is over.
  useEffect(() => {
    const unmaskedWord = maskedWord.split(" ").join("");

    console.log(unmaskedWord + " completeWord");
    if (unmaskedWord === targetWord && isPlaying) {
      setIsPlaying(false);

      setMessage("You win!");
    }
  }, [maskedWord, targetWord, isPlaying]);

  // This is liked to the getKeys function
  const guessLetterClickHandler = (key) => {
    if (!isPlaying) {
      return;
    }

    handleImage(key);
    if (targetWord.includes(key)) {
      setGuessLetters([...guessLetters, key]);
    } else {
      setWrongGuesses([...wrongGuesses, key]);
    }
  };

  return (
    <div
      className={
        "bg-light border border-dark w-75 d-flex flex-column align-items-center mx-auto p-3 mt-3 mb-3 rounded-4 "
      }
      style={{ maxWidth: "550px" }}
    >
      {/*Update this with a message*/}
      <Stack
        style={{ width: "75%" }}
        className={"mx-auto"}
        direction={"horizontal"}
        gap={3}
      >
        <h1 className={"mx-auto"}>{message}</h1>
        <HelperBtn />
      </Stack>

      <img
        className={"mx-auto"}
        src={HangmanState[currentImageIndex]}
        alt={"Hangman"}
        style={{ height: "75%", width: "75%", padding: "5%" }}
      />
      <h2>{maskedWord}</h2>
      <Stack
        direction={"horizontal"}
        gap={3}
        className={
          "flex-wrap align-items-center justify-content-center p-4 my-2"
        }
      >
        {/* KEYBOARD */}

        {getKeys()}
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

// Bug: Button part of page white
// This example helped me understand how to use the useEffect hooks.
// https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral
