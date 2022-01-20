import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  
  return <main>
    <div className='container'>
      <h3>questions And Answers About Login</h3>
      <div>
        {data.map((question) => {

          return <SingleQuestion {...question} key={question.id} />
        })}
      </div>
    </div>
  </main>
}

export default App;
