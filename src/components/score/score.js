import { BsArrowRepeat } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';
import './score.scss';

const ScoreSection = ({score, newGameFunction, handleExit} ) => {
  return (
    <div className='final-page'>
      <div className='score-section'>
        Você acertou {score} em {10}
      </div>
      <div className='score-section'>{score === 10 ? (
          <div>Parabéns! Ganhou.</div>
               )
               :
               (
          <div>Perdeu! Tente Novamente.</div>
          )}</div> 
      <div className='btn-section'>
        <button  className='restart-btn' onClick={newGameFunction}>
          <div className='score-btn'>
            <BsArrowRepeat></BsArrowRepeat>
            Restart Game
          </div>
        </button>
        <button  className='exit-btn' onClick={() => handleExit(true)}>
          <div className='score-btn'>
            <RxExit></RxExit>
            Exit Game
          </div>
        </button>
      </div>
    </div>
  )
}
export default ScoreSection;
