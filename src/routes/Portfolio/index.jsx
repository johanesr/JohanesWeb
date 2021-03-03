import './styles.scss';
import Pokemon from './assets/pokemon.png';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-head">Portfolio</div>
      <div className="portfolio-description">
        <div>Check out my previous works!</div>
      </div>
      <div className="portfolio-body">
        <div className="portfolio-item">
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