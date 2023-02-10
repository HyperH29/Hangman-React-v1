import "./App.css";
import Hangman from "./components/Hangman";
import Footer from "./components/Footer";
//import Hangman from "./components/Example";

// ? import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Hangman />
      <Footer />
    </div>
  );
}

export default App;
// So for this i want to include anime.js and bootstrap
// To make a hangman game with interactive animations
// Keeping it simple
// I want a start and loading screen
// Which will then lead to the game
// I also need to use react route
// Footer
