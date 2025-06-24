import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Vamos criar algo incrível juntos</p>
        </div>

        <div className="contato-content">
          <div className="contato-info">
            <h3>Vamos Conversar</h3>
            <p>
              Estou sempre aberto a novos projetos e colaborações. 
              Se você tem uma ideia ou projeto em mente, adoraria ouvir sobre isso.
            </p>
            
            <div className="contato-details">
              <div className="contato-item">
                <FaEnvelope className="contato-icon" />
                <div>
                  <h4>Email</h4>
                  <p>juniorfredson5209@gmail.com</p>
                </div>
              </div>
              
              <div className="contato-item">
                <FaPhone className="contato-icon" />
                <div>
                  <h4>Telefone</h4>
                  <p>+55 (68) 99999-3206</p>
                </div>
              </div>
              
              <div className="contato-item">
                <FaMapMarkerAlt className="contato-icon" />
                <div>
                  <h4>Localização</h4>
                  <p>Rio Branco - Acre, Brasil</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Siga-me</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/eu_fredsonjr" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/fredson-junior-21b220169" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/5568999993206" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <div className="contato-form">
            <form action="https://formspree.io/f/mqabyrgd" method="POST">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="form-input"
                  name="nome"
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="form-input"
                  name="email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Assunto" 
                  className="form-input"
                  name="assunto"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  placeholder="Sua mensagem" 
                  className="form-textarea"
                  rows="5"
                  name="mensagem"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
