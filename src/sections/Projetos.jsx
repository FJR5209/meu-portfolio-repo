import { useState } from 'react';
import { FaPlay, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
// Futuramente, você pode criar um componente CardDeVideo separado
// import CardDeVideo from '../components/CardDeVideo';

function getYoutubeThumbnail(url) {
  // Extrai o ID do vídeo do YouTube
  const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

export default function Projetos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const projetos = [
    {
      id: 1,
      title: "Videoclipe Musical",
      category: "Música",
      thumbnail: "", // Deixe vazio para gerar automaticamente
      description: "Videoclipe para artista independente com estética cinematográfica.",
      duration: "4 min",
      year: "2024",
      videoUrl: "https://www.youtube.com/watch?v=sZrMsTc6zR0"
    },
    {
      id: 2,
      title: "Videoclipe Musical",
      category: "Música",
      thumbnail: "", // Deixe vazio para gerar automaticamente
      description: "Videoclipe para artista independente com estética cinematográfica.",
      duration: "4 min",
      year: "2024",
      videoUrl: "https://www.youtube.com/watch?v=RydOUfPJfog"
    },
    {
      id: 3,
      title: "Videoclipe Musical",
      category: "Música",
      thumbnail: "", // Deixe vazio para gerar automaticamente
      description: "Videoclipe para artista independente com estética cinematográfica.",
      duration: "4 min",
      year: "2024",
      videoUrl: "https://www.youtube.com/watch?v=OU2hEyQSaLY"
    },
    {
      id: 4,
      title: "Videoclipe Musical",
      category: "Música",
      thumbnail: "", // Deixe vazio para gerar automaticamente
      description: "Videoclipe para artista independente com estética cinematográfica.",
      duration: "4 min",
      year: "2024",
      videoUrl: "https://www.youtube.com/watch?v=dIf71Ot0f0Y"
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

  const openModal = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl(null);
  };

  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">Uma seleção dos meus trabalhos mais recentes</p>
        </div>

        <div className="projetos-grid">
          {projetos.map((projeto) => {
            // Se for YouTube, gera a thumbnail automaticamente
            let thumb = projeto.thumbnail;
            if (!thumb && projeto.videoUrl && projeto.videoUrl.includes('youtube.com')) {
              thumb = getYoutubeThumbnail(projeto.videoUrl);
            }
            const CardContent = (
              <div className="projeto-card">
                <div className="projeto-thumbnail">
                  <div className="thumbnail-placeholder" style={{position: 'relative'}}>
                    {thumb && (
                      <img src={thumb} alt={projeto.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    )}
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
                      {projeto.videoUrl && (
                        <button
                          className="btn btn-primary btn-assistir"
                          style={{ marginTop: '1rem' }}
                          onClick={(e) => { e.stopPropagation(); openModal(projeto.videoUrl); }}
                        >
                          <FaPlay style={{ marginRight: 6 }} /> Assistir
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
            return projeto.videoUrl ? (
              <div
                key={projeto.id}
                style={{ cursor: 'pointer' }}
                onClick={() => openModal(projeto.videoUrl)}
              >
                {CardContent}
              </div>
            ) : (
              <div key={projeto.id}>{CardContent}</div>
            );
          })}
        </div>

        <div className="projetos-cta">
          <button className="btn btn-primary">
            <FaExternalLinkAlt />
            Ver Todos os Projetos
          </button>
        </div>
      </div>

      {/* Modal de vídeo */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <ReactPlayer url={videoUrl} controls width="100%" height="360px"/>
          </div>
        </div>
      )}
    </section>
  );
}