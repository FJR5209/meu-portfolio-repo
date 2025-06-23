import { FaHeart, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
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