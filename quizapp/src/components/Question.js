import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

function Question({ question, totalquestion, currentQuestion, setAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000); // 10 sec
    return gotoNextQuestion;
  }, [question]);

  return (
    <div>
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currentQuestion}</b>
        of
        <b>{totalquestion}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question</span>
          <p>{question.title}</p>
        </div>
        <div className="option">
          {question.option.map((option, index) => {
            return (
              <div
                className={index == selectedOption ? "option active" : "option"}
                key={index}
                onclick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <button onclick={gotoNextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default Question;
