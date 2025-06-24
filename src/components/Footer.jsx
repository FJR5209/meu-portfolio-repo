import { FaHeart, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt="Logo" className="footer-logo" style={{ width: 80, margin: '0 auto 16px auto', display: 'block', opacity: 0.8 }} />
        <div className="footer-content">
          <div className="footer-info">
            <h3>Fredson Junior</h3>
            <p>Filmmaker & Creative Director</p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2024 Fredson Junior. Feito com <FaHeart className="heart-icon" /> 
            e muito café.
          </p>
        </div>
      </div>
    </footer>
  );
} 