import './styles.scss';

function Menu() {
  return(
    <div className="social glassmorphism">
      <a href="https://github.com/johanesr">
        <div className="social-icon">
          <i className="fa fa-github" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/johanes-ronaldo/">
        <div className="social-icon">
          <i className="fa fa-linkedin" />
        </div>
      </a>
      <a href="https://www.instagram.com/ronaldo97">
        <div className="social-icon">
          <i className="fa fa-instagram" />
        </div>
      </a>
      <div className="social-icon mode">
        <i className="fa fa-moon-o" />
      </div>
    </div>
  );
}

export default Menu;