import './styles.scss';
import Pokemon from './assets/pokemon.png';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="app-head">Portfolio</div>
      <div className="app-description">
        <div>Check out my previous works!</div>
      </div>
      <div className="app-body">
        <a href="https://github.com/johanesr">
          <div className="portfolio-item glassmorphism">
            <i className="fa fa-github" />
          </div>
        </a>
        <a href="https://johanes-pokemon-friend.netlify.app/">
          <div className="portfolio-item glassmorphism">
            <img src={Pokemon} alt="Pokemon API"/>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;