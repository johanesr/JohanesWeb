import { Link } from "react-router-dom";
import './styles.scss';
import Johanes from './assets/johanes.jpg';

function Navbar() {
  return (
    <nav className="menu glassmorphism">
      <img src={Johanes} alt="Johanes Ronaldo"/>
      <div className="menu-name">Johanes Ronaldo</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;