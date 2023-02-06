const Words = (guesses) => {
  const arr = ["apple", "banana", "orange", "grape"];

  const random = Math.floor(Math.random() * arr.length);
  const word = arr[random];

  const maskWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <div>
      <p>{maskWord}</p>
    </div>
  );
};

export default Words;
