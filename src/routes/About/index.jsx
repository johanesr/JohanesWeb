import './styles.scss';
import CV from './assets/CV.pdf'

function About() {
  return (
    <div className="about">
      <div className="app-head">Click the Button Below to download my CV! :)</div>
      <a href={CV} download>
        <div className="cv-button glassmorphism">DOWNLOAD</div>
      </a>
    </div>
  );
}

export default About;