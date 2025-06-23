import { FaCamera, FaVideo, FaEdit, FaAward } from 'react-icons/fa';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Conheça minha jornada no mundo do cinema</p>
        </div>
        
        <div className="sobre-content">
          <div className="sobre-text">
            <p className="sobre-description">
              Sou um filmmaker apaixonado por contar histórias através da lente da câmera. 
              Com mais de 5 anos de experiência na indústria cinematográfica, 
              dedico-me a criar conteúdo visual que inspira e emociona.
            </p>
            <p className="sobre-description">
              Minha abordagem combina técnicas tradicionais de cinematografia 
              com tecnologia moderna, resultando em produções únicas e memoráveis.
            </p>
          </div>
          
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <FaCamera />
              </div>
              <h3>Cinematografia</h3>
              <p>Composição visual e iluminação profissional</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <FaVideo />
              </div>
              <h3>Direção</h3>
              <p>Narrativa visual e direção de atores</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <FaEdit />
              </div>
              <h3>Edição</h3>
              <p>Pós-produção e montagem criativa</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <FaAward />
              </div>
              <h3>Prêmios</h3>
              <p>Reconhecimento em festivais nacionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
