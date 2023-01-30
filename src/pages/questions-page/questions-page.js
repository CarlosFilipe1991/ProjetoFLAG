import React, { useState } from 'react';
import Questions from '../../components/questions/questions';
import Score from '../../components/score/score';
import './questions-page.css'

function QuestionsPage({handleExit}) {
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


    
    const newGame = () => {
        setShowScore(false);
        setScore(0);
    }

    
    const handleScore = (data) => {
        setShowScore(true);
        setScore(data + 1);
    }

    return ( 
        <div className='content'>
            {showScore ? (
                <Score score={score} newGameFunction={() => newGame()} handleExit={() => handleExit()}/>
            ) : (
                <Questions handleScore={handleScore} />
            )}
        </div>
    );
  }

export default QuestionsPage;
