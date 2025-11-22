import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">
                        Стеклянные решения <br />
                        <span className="text-gradient">для современного бизнеса</span>
                    </h1>
                    <p className="hero-subtitle">
                        Проектирование, изготовление и монтаж конструкций из закаленного стекла любой сложности.
                    </p>
                    <div className="hero-actions">
                        <Link to="/products" className="btn btn-primary">
                            Наш каталог <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Связаться с нами
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <div className="grid grid-cols-3">
                        <div className="feature-card glass-panel">
                            <div className="feature-icon">💎</div>
                            <h3>Премиум качество</h3>
                            <p className="text-muted">Используем только высококачественное закаленное стекло и фурнитуру от ведущих производителей.</p>
                        </div>
                        <div className="feature-card glass-panel">
                            <div className="feature-icon">⚡</div>
                            <h3>Быстрый монтаж</h3>
                            <p className="text-muted">Собственная бригада опытных монтажников гарантирует качественную установку в срок.</p>
                        </div>
                        <div className="feature-card glass-panel">
                            <div className="feature-icon">🛡️</div>
                            <h3>Гарантия</h3>
                            <p className="text-muted">Предоставляем официальную гарантию на все виды изделий и выполненные работы.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="about-content">
                            <h2>О компании <span className="text-gradient">STEKLOCONTACT</span></h2>
                            <p className="text-muted mb-4">
                                Мы специализируемся на создании современных интерьерных решений из стекла. Наш опыт позволяет воплощать в жизнь самые смелые идеи дизайнеров и архитекторов.
                            </p>
                            <ul className="benefits-list">
                                <li><CheckCircle size={20} className="text-primary" /> Офисные перегородки</li>
                                <li><CheckCircle size={20} className="text-primary" /> Входные группы</li>
                                <li><CheckCircle size={20} className="text-primary" /> Душевые кабины</li>
                                <li><CheckCircle size={20} className="text-primary" /> Ограждения и перила</li>
                            </ul>
                        </div>
                        <div className="about-image glass-panel">
                            {/* Placeholder for About Image */}
                            <div style={{ height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>
                                <span>Фото офиса</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 0;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url('/src/assets/images/hero-bg.png');
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .feature-card {
          padding: 2rem;
          text-align: center;
          transition: transform var(--transition-normal);
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .text-primary {
          color: var(--color-primary);
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 60vh;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
