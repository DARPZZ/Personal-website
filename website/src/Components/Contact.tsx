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
            <a href={'https://www.linkedin.com/in/rasmus-toft-b880a827b/'} target="_blank" rel="noopener noreferrer">
              <img src={linkedInProfile} alt="LinkedIn" width={275} height={125} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmustofthermansen@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={GmailLogo} alt="Gmail" width={150} height={100} />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
