import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
// Futuramente, você pode criar um componente CardDeVideo separado
// import CardDeVideo from '../components/CardDeVideo';

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      title: "Documentário Urbano",
      category: "Documentário",
      thumbnail: "/api/placeholder/400/300",
      description: "Uma jornada pelas ruas da cidade através dos olhos de seus habitantes.",
      duration: "45 min",
      year: "2024"
    },
    {
      id: 2,
      title: "Comercial Automotivo",
      category: "Publicidade",
      thumbnail: "/api/placeholder/400/300",
      description: "Campanha publicitária para marca de automóveis de luxo.",
      duration: "30 seg",
      year: "2024"
    },
    {
      id: 3,
      title: "Videoclipe Musical",
      category: "Música",
      thumbnail: "/api/placeholder/400/300",
      description: "Videoclipe para artista independente com estética cinematográfica.",
      duration: "4 min",
      year: "2023"
    },
    {
      id: 4,
      title: "Curta-Metragem",
      category: "Ficção",
      thumbnail: "/api/placeholder/400/300",
      description: "Narrativa sobre conexões humanas em tempos digitais.",
      duration: "15 min",
      year: "2023"
    },
    {
      id: 5,
      title: "Evento Corporativo",
      category: "Eventos",
      thumbnail: "/api/placeholder/400/300",
      description: "Cobertura completa de evento empresarial internacional.",
      duration: "2 horas",
      year: "2023"
    },
    {
      id: 6,
      title: "Série Web",
      category: "Digital",
      thumbnail: "/api/placeholder/400/300",
      description: "Série de episódios para plataforma digital.",
      duration: "8 episódios",
      year: "2022"
    }
  ];

  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">Uma seleção dos meus trabalhos mais recentes</p>
        </div>

        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div 
              key={projeto.id} 
              className="projeto-card"
            >
              <div className="projeto-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-overlay">
                    <FaPlay />
                  </div>
                </div>
                <div className="projeto-overlay">
                  <div className="projeto-info">
                    <h3>{projeto.title}</h3>
                    <p>{projeto.description}</p>
                    <div className="projeto-meta">
                      <span className="category">{projeto.category}</span>
                      <span className="duration">{projeto.duration}</span>
                      <span className="year">{projeto.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projetos-cta">
          <button className="btn btn-primary">
            <FaExternalLinkAlt />
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}