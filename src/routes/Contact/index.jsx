import './styles.scss';

function Contact() {
  const socialLink = [
    'mailto:someone@example.com',
    'https://github.com/johanesr',
    'https://www.linkedin.com/in/johanes-ronaldo/',
    'https://www.instagram.com/ronaldo97'
  ]
  const socialMedia = ['fa fa-envelope','fa fa-github','fa fa-linkedin','fa fa-instagram']

  return (
    <div className="contact">
      <div className="app-head">Contact</div>
      <div className="app-description">
        <div>Getting to know someone is a beautiful process,</div>
        <div>so send me a message and let's get to know each other!</div>
      </div>
      <div className="app-body">
        {socialMedia.map((item, i) => (
          <a href={socialLink[i]} >
          <div className="app-item glassmorphism" key={i}><i className={item} /></div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;