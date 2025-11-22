import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Главная', path: '/' },
        { name: 'Продукция', path: '/products' },
        { name: 'Контакты', path: '/contact' },
    ];

    return (
        <div className="app-container">
            <header className="header glass-panel">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <span className="text-gradient">STEKLOCONTACT</span>
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
                        {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="mobile-nav glass-panel">
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
                    <div className="grid grid-cols-3">
                        <div className="footer-col">
                            <h3>STEKLOCONTACT</h3>
                            <p className="text-muted">
                                Современные решения из стекла для вашего бизнеса и дома.
                            </p>
                        </div>
                        <div className="footer-col">
                            <h4>Контакты</h4>
                            <ul className="contact-list">
                                <li><Phone size={16} /> +375 29 XXX XX XX</li>
                                <li><Mail size={16} /> info@steklocontact.by</li>
                                <li><MapPin size={16} /> г. Брест, ул. Примерная, 123</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Мы в соцсетях</h4>
                            <div className="social-links">
                                <a href="#" className="social-link"><Instagram size={24} /></a>
                            </div>
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
          position: sticky;
          top: 1rem;
          margin: 0 1rem;
          z-index: 100;
          padding: 1rem 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          opacity: 0.8;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          opacity: 1;
          color: var(--color-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 0.5rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          padding: 0.5rem;
          text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        main {
          flex: 1;
        }

        .footer {
          background: #020617;
          padding: 4rem 0 2rem;
          margin-top: 4rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-col h3 {
          margin-bottom: 1rem;
        }

        .footer-col h4 {
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .text-muted {
          color: var(--color-text-muted);
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .grid-cols-3 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Layout;
