const Words = () => {
  const arr = ["apple", "banana", "orange", "grape"];

  const random = Math.floor(Math.random() * arr.length);
  const word = arr[random];
  return (
    <div>
      <p>{word}</p>
    </div>
  );
};

export default Words;
