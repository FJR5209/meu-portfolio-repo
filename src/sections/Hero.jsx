import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Fredson</span> Junior
          </h1>
          <h2 className="hero-subtitle">Filmmaker & Creative Director</h2>
          <p className="hero-description">
            Transformando visões em narrativas visuais impactantes. 
            Especializado em cinematografia, edição e direção criativa.
          </p>
          <div className="hero-buttons">
            <Link 
              to="projetos" 
              smooth={true} 
              duration={800}
              className="btn btn-primary"
            >
              Ver Projetos
            </Link>
            <Link 
              to="contato" 
              smooth={true} 
              duration={800}
              className="btn btn-secondary"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
        <div className="hero-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src={logo} alt="Logo" style={{ width: '605px', height: '605px', objectFit: 'contain' }} />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}