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
                                <div key={product.id} className="product-card glass-panel">
                                    <div className="product-icon-wrapper">
                                        <IconComponent size={40} className="text-primary" />
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.title}</h3>
                                        <p className="text-muted">{product.description}</p>
                                    </div>
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
          padding: 2.5rem;
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          transition: all var(--transition-normal);
        }

        .product-card:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .product-icon-wrapper {
          background: rgba(255,255,255,0.03);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .product-info h3 {
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
        }

        .product-info p {
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .product-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
        </div>
    );
};

export default Products;
