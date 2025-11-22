import React from 'react';
import { ArrowRight, CheckCircle, Settings, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Промышленная <br />
            <span className="text-gradient">обработка стекла</span>
          </h1>
          <p className="hero-subtitle">
            Полный цикл производства: от резки и закалки до изготовления сложных архитектурных форм. Работаем с B2B сектором.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Каталог услуг <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Capabilities Section */}
      <section className="features">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="feature-card glass-panel">
              <div className="feature-icon"><Settings size={48} className="text-primary" /></div>
              <h3>Современное оборудование</h3>
              <p className="text-muted">Автоматизированные линии резки и обработки кромки обеспечивают высокую точность изделий.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon"><Truck size={48} className="text-primary" /></div>
              <h3>Логистика и монтаж</h3>
              <p className="text-muted">Собственный автопарк для перевозки крупногабаритного стекла и профессиональные монтажные бригады.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon"><Shield size={48} className="text-primary" /></div>
              <h3>Контроль качества</h3>
              <p className="text-muted">Строгое соблюдение ГОСТ и многоступенчатый контроль на всех этапах производства.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="about-content">
              <h2>Надежный партнер <span className="text-gradient">для вашего бизнеса</span></h2>
              <p className="text-muted mb-4">
                Компания STEKLOCONTACT специализируется на промышленной переработке стекла для строительных и интерьерных компаний. Мы предлагаем комплексные решения для остекления фасадов, торговых центров и офисных зданий.
              </p>
              <ul className="benefits-list">
                <li><CheckCircle size={20} className="text-primary" /> Закалка плоского стекла</li>
                <li><CheckCircle size={20} className="text-primary" /> Изготовление триплекса</li>
                <li><CheckCircle size={20} className="text-primary" /> Структурное остекление</li>
                <li><CheckCircle size={20} className="text-primary" /> Архитектурные формы</li>
              </ul>
            </div>
            <div className="about-image glass-panel">
              {/* Placeholder for Industrial Image */}
              <div style={{ height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)' }}>
                <span className="text-muted">Производственная линия</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 85vh;
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
          background-image: linear-gradient(rgba(11, 17, 32, 0.9), rgba(11, 17, 32, 0.7)), url('/src/assets/images/hero-bg.png');
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
        }

        .hero-title {
          font-size: 4rem;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          max-width: 650px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .feature-card {
          padding: 2.5rem;
          transition: transform var(--transition-normal), border-color var(--transition-normal);
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .feature-icon {
          margin-bottom: 1.5rem;
        }

        .text-primary {
          color: var(--color-primary);
        }

        .mb-4 {
          margin-bottom: 2rem;
        }

        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero {
            min-height: 70vh;
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
