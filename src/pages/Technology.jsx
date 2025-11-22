import React from 'react';
import { Settings, CheckCircle, Box } from 'lucide-react';

const Technology = () => {
    return (
        <div className="technology-page">
            <section className="section section-alt">
                <div className="container">
                    <h1>Технологии и Оборудование</h1>
                    <p className="text-muted" style={{ maxWidth: '700px' }}>
                        Наше производство оснащено современными автоматизированными линиями от ведущих мировых производителей (Lisec, Bottero, NorthGlass).
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ alignItems: 'center', marginBottom: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem' }}>Закалка стекла</h2>
                            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                                Печь закалки NorthGlass последнего поколения с системой конвекции позволяет закаливать стекло, в том числе с низкоэмиссионным покрытием (Low-E), без оптических искажений.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} className="text-primary" /> Максимальный размер: 2440 x 4200 мм
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} className="text-primary" /> Толщина стекла: 4 - 19 мм
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} className="text-primary" /> Соответствие ГОСТ 30698-2014
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ background: '#f8fafc', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                            <Settings size={80} className="text-muted" style={{ opacity: 0.5 }} />
                            <span style={{ marginTop: '1rem', color: '#64748b', fontWeight: 600 }}>Фото печи закалки</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <h2 style={{ fontSize: '2rem' }}>Обработка с ЧПУ</h2>
                            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                                Обрабатывающие центры Intermac выполняют сверление, зенковку и фрезеровку вырезов любой сложности с высокой точностью, что критически важно для установки фурнитуры.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} className="text-primary" /> Точность позиционирования: ±0.2 мм
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} className="text-primary" /> Любые виды кромок (полировка, шлифовка)
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ order: 1, background: '#f8fafc', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                            <Box size={80} className="text-muted" style={{ opacity: 0.5 }} />
                            <span style={{ marginTop: '1rem', color: '#64748b', fontWeight: 600 }}>Фото станка ЧПУ</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;
