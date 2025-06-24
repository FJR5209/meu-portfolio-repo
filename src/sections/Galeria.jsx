import { FaExpand, FaCamera } from 'react-icons/fa';
import foto1 from '../assets/FOTOS/bolsonaro.jpeg';
import foto2 from '../assets/FOTOS/campanhaze.jpeg';
import foto3 from '../assets/FOTOS/campanhaNatal.jpeg';
import foto4 from '../assets/FOTOS/mardokel.jpeg';
import foto5 from '../assets/FOTOS/30223B82-8962-4E39-A99F-71711413AF35_1_102_o.jpeg';

export default function Galeria() {
  const galeriaItems = [
    { id: 1, title: "Bolsonaro", image: foto1 },
    { id: 2, title: "Campanha Ze", image: foto2 },
    { id: 3, title: "Campanha Natal", image: foto3 },
    { id: 4, title: "Mardokel", image: foto4 },
    { id: 5, title: "Evento", image: foto5 },
  ];

  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Galeria</h2>
          <p className="section-subtitle">Momentos capturados através da lente</p>
        </div>

        <div className="galeria-grid">
          {galeriaItems.map((item) => (
            <div key={item.id} className="galeria-item">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: 8
                }}
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="galeria-stats">
          <div className="stat-item">
            <FaCamera className="stat-icon" />
            <div className="stat-content">
              <h3>500+</h3>
              <p>Projetos Realizados</p>
            </div>
          </div>
          <div className="stat-item">
            <FaCamera className="stat-icon" />
            <div className="stat-content">
              <h3>50+</h3>
              <p>Clientes Satisfeitos</p>
            </div>
          </div>
          <div className="stat-item">
            <FaCamera className="stat-icon" />
            <div className="stat-content">
              <h3>5+</h3>
              <p>Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
