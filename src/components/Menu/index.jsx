import { Link } from "react-router-dom";
import './styles.scss';
import Johanes from './assets/johanes.jpg';

function Navbar() {
  const isMobile = window.innerWidth<=990;

  return (
    <nav className={isMobile ? "menu-mobile glassmorphism" : "menu glassmorphism"}>
      <img src={Johanes} alt="Johanes Ronaldo"/>
      {!isMobile && <div className="menu-name">Johanes Ronaldo</div>}

      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;