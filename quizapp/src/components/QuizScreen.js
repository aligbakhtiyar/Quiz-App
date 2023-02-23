import React, { useState } from "react";


function QuizScreen({retry}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswers] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.lenght;
    function calculateResult(){
      let correct =0;
      QuestionList.forEach((quesrion,index)=>{
        if(quesrion.correctOptionIndex == markedAnswer[index]){
          correct ++;
        }
      })
      return{
        total: QuestionList.lenght,

      }
    }

  return (
    <div>
      {isQuestionEnd ? (
        <QuizResult 
          result ={calculateResult()}
          retry={retry}
        />
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
