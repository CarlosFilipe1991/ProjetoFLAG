import './App.css';
import React, { useState } from 'react';
import QuestionsPage from './pages/questions-page/questions-page';
import Homepage from './pages/homepage/homepage';
import Title from '../src/assets/images/logo.png';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

    function start() {       
    setStartQuiz(true);
  }

  const handleExit = () => {
    setStartQuiz(false);
  };

  return ( 
    <div>
      {startQuiz ? 
        (
          
          <QuestionsPage handleExit={handleExit}></QuestionsPage>
        ) 
        : 
        (
          
          <Homepage title={Title} onClickFunction={() => start()}></Homepage>
        )
      }
    </div>
  );
}
export default App;
