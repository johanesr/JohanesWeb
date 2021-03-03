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
        <div className="portfolio-item glassmorphism">
          <i className="fa fa-github" />
        </div>
        <div className="portfolio-item glassmorphism">
          <img src={Pokemon} alt="Pokemon API"/>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;