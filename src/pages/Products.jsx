import React from 'react';

const products = [
    {
        id: 1,
        title: 'Стеклянные перегородки',
        description: 'Зонирование офисных и торговых помещений с сохранением визуального объема.',
        icon: '🏢'
    },
    {
        id: 2,
        title: 'Раздвижные двери',
        description: 'Экономия пространства и современный дизайн для любого интерьера.',
        icon: '🚪'
    },
    {
        id: 3,
        title: 'Душевые кабины',
        description: 'Индивидуальные решения из закаленного стекла для ванных комнат.',
        icon: '🚿'
    },
    {
        id: 4,
        title: 'Входные группы',
        description: 'Презентабельные и надежные входные группы для магазинов и офисов.',
        icon: '🏪'
    },
    {
        id: 5,
        title: 'Ограждения и перила',
        description: 'Безопасные и стильные ограждения для лестниц и балконов.',
        icon: '🪜'
    },
    {
        id: 6,
        title: 'Скинали и фартуки',
        description: 'Стеклянные панели с фотопечатью для кухни и интерьера.',
        icon: '🖼️'
    }
];

const Products = () => {
    return (
        <div className="products-page">
            <section className="page-header">
                <div className="container">
                    <h1>Наша <span className="text-gradient">Продукция</span></h1>
                    <p className="text-muted">Широкий спектр изделий из стекла для любых задач</p>
                </div>
            </section>

            <section className="products-grid">
                <div className="container">
                    <div className="grid grid-cols-2">
                        {products.map((product) => (
                            <div key={product.id} className="product-card glass-panel">
                                <div className="product-icon">{product.icon}</div>
                                <div className="product-info">
                                    <h3>{product.title}</h3>
                                    <p className="text-muted">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        .page-header {
          text-align: center;
          padding-bottom: 2rem;
        }

        .product-card {
          padding: 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          transition: all var(--transition-normal);
        }

        .product-card:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--color-primary);
        }

        .product-icon {
          font-size: 2.5rem;
          background: rgba(255,255,255,0.05);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .product-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
        </div>
    );
};

export default Products;
