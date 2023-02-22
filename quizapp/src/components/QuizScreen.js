import React, { useState } from "react";

function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswers] = useState(
    new Array(QuestionList.lenght)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.lenght;
  return (
    <div>
      {isQuestionEnd ? (
        <QuizResult />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestion={QuestionList.lenght}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default QuizScreen;
