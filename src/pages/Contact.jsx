import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Свяжитесь <span className="text-gradient">с нами</span></h1>
                    <p className="text-muted">Мы всегда рады ответить на ваши вопросы и обсудить проект</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="contact-info">
                            <div className="info-card glass-panel">
                                <h3>Контактная информация</h3>
                                <div className="info-item">
                                    <Phone className="text-primary" />
                                    <div>
                                        <p className="label">Телефон</p>
                                        <p className="value">+375 29 XXX XX XX</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Mail className="text-primary" />
                                    <div>
                                        <p className="label">Email</p>
                                        <p className="value">info@steklocontact.by</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <MapPin className="text-primary" />
                                    <div>
                                        <p className="label">Адрес</p>
                                        <p className="value">г. Брест, ул. Примерная, 123</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Clock className="text-primary" />
                                    <div>
                                        <p className="label">Режим работы</p>
                                        <p className="value">Пн-Пт: 9:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper glass-panel">
                            <h3>Напишите нам</h3>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label>Ваше имя</label>
                                    <input type="text" placeholder="Иван Иванов" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Телефон</label>
                                    <input type="tel" placeholder="+375 29 ..." className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Сообщение</label>
                                    <textarea placeholder="Опишите ваш проект..." className="form-input" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Отправить заявку</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .info-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .label {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }

        .value {
          font-size: 1.1rem;
          font-weight: 500;
        }

        .contact-form-wrapper {
          padding: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.75rem;
          border-radius: 8px;
          color: white;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default Contact;
