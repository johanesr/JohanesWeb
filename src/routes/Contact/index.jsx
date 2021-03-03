import './styles.scss';

function Contact() {
  const socialMedia = ['fa fa-envelope','fa fa-whatsapp','fa fa-linkedin','fa fa-instagram']

  return (
    <div className="contact">
      <div className="contact-head">Contact</div>
      <div className="contact-description">
        <div>Getting to know someone is a beautiful process,</div>
        <div>so send me a message and let's get to know each other!</div>
      </div>
      <div className="contact-body">
        {socialMedia.map((item, i) => (
          <div className="contact-item glassmorphism" key={i}><i className={item} /></div>
        ))}
      </div>
    </div>
  );
}

export default Contact;