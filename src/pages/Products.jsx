import React from 'react';
import { Flame, Scissors, Layers, Building, Grid, Shield, Box } from 'lucide-react';
import productsData from '../data/products.json';

const iconMap = {
  Flame,
  Scissors,
  Layers,
  Building,
  Grid,
  Shield
};

const specLabels = {
  max_size: 'Макс. размер',
  thickness: 'Толщина',
  standards: 'Стандарты',
  accuracy: 'Точность',
  types: 'Типы',
  edge: 'Кромка',
  formula: 'Формула',
  film: 'Пленка',
  features: 'Особенности',
  u_value: 'Теплопроводность',
  glass_types: 'Типы стекла',
  application: 'Применение',
  height: 'Высота',
  sound_reduction: 'Звукоизоляция',
  fittings: 'Фурнитура',
  load: 'Нагрузка',
  mounting: 'Крепление',
  glass: 'Стекло'
};

const Products = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <h1>Наши <span className="text-gradient">Услуги</span></h1>
          <p className="text-muted">Профессиональная обработка стекла для промышленных и архитектурных задач</p>
        </div>
      </section>

      <section className="products-grid">
        <div className="container">
          <div className="grid grid-cols-2">
            {productsData.map((product) => {
              const IconComponent = iconMap[product.icon] || Box;

              return (
                <div key={product.id} className="card product-card">
                  <div className="product-header" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="product-icon-wrapper" style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    <h3 style={{ margin: 0 }}>{product.title}</h3>
                  </div>

                  <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{product.description}</p>

                  {product.specs && (
                    <div className="specs-box" style={{ background: '#f8fafc', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.25rem' }}>
                          <span style={{ color: '#64748b' }}>{specLabels[key] || key}</span>
                          <span style={{ fontWeight: 600, color: '#334155' }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          text-align: center;
          padding-bottom: 3rem;
          padding-top: 2rem;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .product-header {
           margin-top: 0;
        }

        @media (max-width: 768px) {
          .product-card {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
