import './styles.scss';
import ReactTypingEffect from 'react-typing-effect';

const typingText = ['A Front-End Developer','A Fresh Graduate','A Computer Science Graduate']

function Home() {
  return(
    <div className="home">
      <div className="home-name">Johanes Ronaldo</div>
      <div className="home-introduction line-with-text">Welcome to my Website!</div>
      <div className="typing-effect">
        <ReactTypingEffect
          text={typingText}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1500}
        />
      </div>
    </div>
  );
}

export default Home;