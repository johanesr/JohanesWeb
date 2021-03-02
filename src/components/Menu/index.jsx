import './styles.scss';

function Menu() {
  return(
    <div className="social glassmorphism">
      <div className="social-icon">
        <i className="fa fa-github" />
      </div>
      <div className="social-icon">
        <i className="fa fa-linkedin" />
      </div>
      <div className="social-icon">
        <i className="fa fa-instagram" />
      </div>
      <div className="social-icon mode">
        <i className="fa fa-moon-o" />
      </div>
    </div>
  );
}

export default Menu;