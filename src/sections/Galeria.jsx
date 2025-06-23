import { FaExpand, FaCamera } from 'react-icons/fa';

export default function Galeria() {
  const galeriaItems = [
    {
      id: 1,
      title: "Cinematografia Urbana",
      category: "Street Photography",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Retratos Profissionais",
      category: "Portrait",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Paisagens Noturnas",
      category: "Landscape",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Eventos Corporativos",
      category: "Events",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Moda Editorial",
      category: "Fashion",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Documentário Social",
      category: "Documentary",
      image: "/api/placeholder/400/300"
    }
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
              <div className="galeria-image">
                <div className="image-placeholder">
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <FaExpand className="expand-icon" />
                      <h3>{item.title}</h3>
                      <p>{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
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
