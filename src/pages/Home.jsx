import React from 'react';
import { ArrowRight, Settings, Shield, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title text-light">
            Промышленные решения <br />
            в стекольной индустрии
          </h1>
          <p className="hero-subtitle text-light">
            Комплексная обработка стекла, проектирование и монтаж для B2B сектора. Соответствие международным стандартам качества.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Каталог услуг
            </Link>
            <Link to="/projects" className="btn btn-outline">
              Наши проекты
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="grid grid-cols-4">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Лет опыта</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Реализованных проектов</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Производство</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Контроль качества</span>
            </div>
          </div>
        </div>
      </div>

      {/* About / Corporate Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div>
              <h4 className="text-primary">О КОМПАНИИ</h4>
              <h2>Надежный партнер для вашего бизнеса</h2>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                STEKLOCONTACT — это современное производство полного цикла. Мы специализируемся на сложной обработке стекла для архитектурных бюро, строительных компаний и производителей мебели.
              </p>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>
                Наш парк оборудования позволяет выполнять закалку, резку, триплексацию и цифровую печать на стекле любых габаритов.
              </p>
              <Link to="/technology" className="btn btn-primary">
                Наше производство
              </Link>
            </div>
            <div className="image-block">
              {/* Placeholder for Factory Image */}
              <div style={{ background: '#f1f5f9', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                <Settings size={64} className="text-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-3">
            <div className="card">
              <Settings size={40} className="text-primary" style={{ marginBottom: '1rem' }} />
              <h3>Технологичность</h3>
              <p className="text-muted">Автоматизированные линии Lisec и Bottero обеспечивают точность резки до 0.1 мм.</p>
            </div>
            <div className="card">
              <Truck size={40} className="text-primary" style={{ marginBottom: '1rem' }} />
              <h3>Логистика</h3>
              <p className="text-muted">Собственный парк специализированного транспорта для перевозки джамбо-формата.</p>
            </div>
            <div className="card">
              <Shield size={40} className="text-primary" style={{ marginBottom: '1rem' }} />
              <h3>Гарантии</h3>
              <p className="text-muted">Официальная гарантия на все виды работ. Сертификаты соответствия ГОСТ и ISO.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          background-color: #0f172a;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url('/src/assets/images/hero-bg.png');
          background-size: cover;
          background-position: center;
          opacity: 0.6;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .stats-bar {
          background: var(--color-primary);
          color: white;
          padding: 3rem 0;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .hero { min-height: 500px; }
          .hero-title { font-size: 2.5rem; }
          .stats-bar .grid-cols-4 { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
