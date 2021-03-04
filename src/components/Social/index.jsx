import './styles.scss';

function Menu(props) {
  const theme = props.theme;

  return(
    <div className="social glassmorphism">
      {console.log(props)}
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
        <i className="fa fa-moon-o" />
      </div>
    </div>
  );
}

export default Menu;