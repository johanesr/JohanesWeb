import './styles.scss';

function Menu(props) {
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
      <div className="social-icon mode" onClick={props.changeTheme}>
        <i className={props.curTheme ? "fa fa-moon-o" : "fa fa-sun-o"} />
      </div>
    </div>
  );
}

export default Menu;