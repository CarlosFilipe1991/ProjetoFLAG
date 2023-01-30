import React, { useState } from 'react';
import List from '../../questions-list/questions-list.json';
import './questions.scss';

const questions = List;


const generateRandomQuestions = () => {
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


const numbersArrayGenerator = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
      array[i] = i;
  }
  return array;
}

  let numbersArray = numbersArrayGenerator(questions.length);
  shuffle(numbersArray);
  let randomSample = numbersArray.slice(0, 10);
  return randomSample;

}

const QuestionSection = ({handleScore}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [questionsList, setQuestionsList] = useState(generateRandomQuestions());

    
    const handleAnswerOptionClick = (isCorrect) => {
        
        if (isCorrect) {
            setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;

        
        if (nextQuestion < 10) {
            setCurrentQuestion(nextQuestion);
        } 
       
        else {
            handleScore(score);
            setQuestionsList(generateRandomQuestions());
        }
    };

    return (
        <>
        <div className='question-section'>
            <div className='question-count'>
                <span>Questão {currentQuestion + 1 }</span>/{10}
            </div>
            <div className='question-text'>{questions[questionsList[currentQuestion]].questionText}</div>
        </div>
        <div className='answer-section'>
            {questions[questionsList[currentQuestion]].answerOptions.map((answerOption, index) => (
                <button key={index}  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
        </div>
    </>
    )
}

export default QuestionSection;