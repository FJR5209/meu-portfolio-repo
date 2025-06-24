import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt="Logo" className="footer-logo" style={{ width: 80, margin: '0 auto 1px auto', display: 'block', opacity: 0.8 }} />
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h3 style={{ color: 'var(--color-accent)', marginBottom: 4 }}>Fredson Junior</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>Filmmaker & Creative Director</p>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2023 Fredson Junior. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 