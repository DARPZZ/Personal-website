import './Contact.css';
import GmailLogo from '../assets/download-removebg-preview.png';
import linkedInProfile from '../assets/linkedInLogo-removebg-preview.png';

function Contact() {
  return (
    <div className='container'>
      <div className='contact'>
        <div className='contact-text'>
          <h2>You can get in contact with me here</h2>
        </div>
        <div className='links'>
            <a  href={'https://www.linkedin.com/in/rasmus-toft-b880a827b/'} target="_blank" rel="noopener noreferrer">
              <img id='linkedin-image' src={linkedInProfile} alt="LinkedIn"  />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmustofthermansen@gmail.com" target="_blank" rel="noopener noreferrer">
              <img id='gmail-image' src={GmailLogo} alt="Gmail"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
