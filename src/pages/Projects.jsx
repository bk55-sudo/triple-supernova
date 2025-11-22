import React from 'react';
import { MapPin } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Бизнес-центр "Capital Palace"',
        location: 'г. Минск',
        category: 'Фасадное остекление',
        description: 'Структурное остекление фасада площадью 2500 м². Использовано мультифункциональное стекло Guardian SunGuard.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'ТЦ "Galleria"',
        location: 'г. Брест',
        category: 'Интерьерные решения',
        description: 'Цельностеклянные перегородки и ограждения атриума. Общая площадь остекления 1200 м².',
        image: 'https://images.unsplash.com/photo-1582037928769-181f2422618e?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Офис IT-компании',
        location: 'г. Гродно',
        category: 'Офисные перегородки',
        description: 'Зонирование open-space пространства с использованием звукоизоляционного триплекса.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        title: 'Жилой комплекс "Маяк"',
        location: 'г. Минск',
        category: 'Входные группы',
        description: 'Остекление входных групп и лифтовых холлов. Антивандальное исполнение.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
    }
];

const Projects = () => {
    return (
        <div className="projects-page">
            <section className="section section-alt">
                <div className="container">
                    <h1>Наши проекты</h1>
                    <p className="text-muted" style={{ maxWidth: '600px' }}>
                        Примеры реализованных объектов, демонстрирующие наши возможности в промышленном остеклении.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2">
                        {projects.map((project) => (
                            <div key={project.id} className="card project-card" style={{ padding: 0, overflow: 'hidden' }}>
                                <div className="project-image" style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    />
                                </div>
                                <div className="project-content" style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div>
                                            <span className="project-category text-primary" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
                                                {project.category}
                                            </span>
                                            <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                        <MapPin size={16} /> {project.location}
                                    </div>
                                    <p className="text-muted">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
      `}</style>
        </div>
    );
};

export default Projects;
