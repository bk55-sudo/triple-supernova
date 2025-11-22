import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/products' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Технологии', path: '/technology' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">
            STEKLOCONTACT
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-4">
            <div className="footer-col">
              <h3>STEKLOCONTACT</h3>
              <p className="text-muted">
                Промышленная переработка стекла. Комплексные решения для бизнеса и архитектуры.
              </p>
            </div>
            <div className="footer-col">
              <h4>Навигация</h4>
              <ul className="footer-links">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Услуги</h4>
              <ul className="footer-links">
                <li><Link to="/products">Закалка стекла</Link></li>
                <li><Link to="/products">Триплекс</Link></li>
                <li><Link to="/products">Фасады</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Контакты</h4>
              <ul className="contact-list">
                <li><Phone size={16} /> +375 29 XXX XX XX</li>
                <li><Mail size={16} /> info@steklocontact.by</li>
                <li><MapPin size={16} /> г. Брест, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Steklocontact. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .header {
          background: white;
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.05em;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-text);
          font-size: 0.95rem;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          color: var(--color-text);
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid var(--color-border);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          padding: 0.75rem;
          border-bottom: 1px solid var(--color-bg-alt);
        }

        main {
          flex: 1;
        }

        .footer {
          background: #0f172a; /* Dark footer */
          color: white;
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer h3, .footer h4 {
          color: white;
          margin-bottom: 1.5rem;
        }

        .footer .text-muted {
          color: #94a3b8;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: #cbd5e1;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e1;
        }

        .footer-bottom {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: #64748b;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
          .grid-cols-4 { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
