import React from 'react'


function QuizResult({result, retry}) {
  return (
    <div className='result-screen'>
        <h2>Result: {result.percentage}%</h2>
        <p>Selected {result.correct} correct option out of {result.total} questions</p>
        <button type="button" className="btn btn-warning" onClick={retry}>Retry</button>
      
    </div>
  )
}

export default QuizResult
 