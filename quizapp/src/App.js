import { useState } from "react";
import QuizScreen from "./components/QuizScreen";
import JoinScreen from "./components/JoinScreen";
import "./index.css"


import React from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container-sm">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </>
  );
}

export default App;
