import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import HangmanState from "./HangmanStates";
import { Col, Row, Stack } from "react-bootstrap";
import { useEffect } from "react";

import HelperBtn from "./Popup";
import Message from "./Alert";

const Hangman = () => {
  const [guesses, setGuesses] = useState([]);
  const [word, setWord] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState([]);
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
    setPlay(true);
  };

  const buttonVariant = (key) => {
    if (guesses.includes(key)) return "success";
    if (wrongGuesses.includes(key)) return "danger";
    return "outline-dark";
  };

  const maskWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  // Edited code
  const handleImage = useCallback(
    (letter) => {
      if (!word.includes(letter)) {
        setCurrentImage(currentImage + (1 % HangmanState.length));
        if (currentImage >= 9) {
          setPlay(false);
          setMessage("You lose!");
        }
      } else {
        setPlay(true);
      }
    },
    [currentImage, word]
  );

  useEffect(() => {
    const completeWord = maskWord.split(" ").join("");
    console.log(completeWord + " completeWord");
    if (completeWord === word && play) {
      setPlay(false);

      setMessage("You win!");
    }
  }, [maskWord, word, play]);

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
        src={HangmanState[currentImage]}
        alt={"Hangman"}
        style={{ height: "75%", width: "75%", padding: "5%" }}
      />
      <h2>{maskWord}</h2>
      <Stack
        direction={"horizontal"}
        gap={3}
        className={
          "flex-wrap align-items-center justify-content-center p-4 my-2"
        }
      >
        {/* KEYBOARD */}

        {keys.map((key, i) => (
          <Button
            variant={buttonVariant(key)}
            key={i}
            disabled={guesses.includes(key) || wrongGuesses.includes(key)}
            onClick={() => {
              handleImage(key);
              if (word.includes(key)) {
                setGuesses([...guesses, key]);
              } else {
                setWrongGuesses([...wrongGuesses, key]);
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

// Todo: Link loadscreen
// Todo: When game has finished end all input
// Bug: Button part of page white
// Bug: When game is over it still continues to play
// Refactor and simplify code
