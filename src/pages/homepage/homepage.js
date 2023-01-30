import './homepage.scss';

const Homepage = ({title, onClickFunction}) => {
  return ( 
    <div className='homepage'>
        <img alt='logo' className='homepage-title' src={title}></img>
        <button className='start-game-btn' onClick={onClickFunction}>START</button>
    </div> 
  );
}
export default Homepage;