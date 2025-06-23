import React from 'react';
// Futuramente, você pode criar um componente CardDeVideo separado
// import CardDeVideo from '../components/CardDeVideo';

const videos = [
  {
    id: 1,
    title: 'Clipe Musical - "Horizonte"',
    description: 'Direção de fotografia para a banda Sol Poente.',
    thumbnailUrl: '/path/to/thumbnail1.jpg', // Coloque as thumbnails em `public/` ou `src/assets/`
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // URL do seu vídeo no YouTube/Vimeo
  },
  {
    id: 2,
    title: 'Casamento Ana & Pedro',
    description: 'Short film cinematográfico do casamento.',
    thumbnailUrl: '/path/to/thumbnail2.jpg',
    videoUrl: 'https://vimeo.com/link-do-seu-video'
  }
];

function Projetos() {
  return (
    <section id="projetos" className="projetos-section">
      <h2>Meus Trabalhos</h2>
      <div className="video-grid">
        {videos.map(video => (
          // Por enquanto, um link simples. Depois, isso pode ser um componente complexo com modal.
          <a href={video.videoUrl} key={video.id} target="_blank" rel="noopener noreferrer" className="video-card">
            <img src={video.thumbnailUrl} alt={video.title} />
            <div className="card-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projetos;