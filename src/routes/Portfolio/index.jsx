import './styles.scss';
import Pokemon from './assets/pokemon.png';
import FoodIdentifier from './assets/FoodIdentifier.png';
import Pawsome from './assets/pawsome.jpeg';
import Thesis from './assets/Thesis.png';
import ThesisReport from './assets/Thesis_Report.pdf';

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
        <a href="https://youtu.be/Lb5ZEa_jLAA">
          <div className="portfolio-item glassmorphism">
            <img src={FoodIdentifier} alt="Food Identifier"/>
          </div>
        </a>
        <a href="https://youtu.be/HAsJt8e1f9E">
          <div className="portfolio-item glassmorphism">
            <img src={Pawsome} alt="Pawsome"/>
          </div>
        </a>
        <a href={ThesisReport} download>
          <div className="portfolio-item glassmorphism">
            <img src={Thesis} alt="Pawsome"/>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;