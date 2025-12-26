export default function Pricing() {
    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-container">

                <div className="pricing-header">
                    <div className="section-label">
                        <span>СТОИМОСТЬ</span>
                    </div>
                    <h2 className="pricing-title">Выберите формат обучения</h2>
                    <p className="pricing-subtitle">
                        Групповые и индивидуальные занятия с опытными преподавателями ЕГЭ
                    </p>
                </div>

                <div className="plans-grid">

                    <div className="plan-card">
                        <div className="plan-header">
                            <h3 className="plan-name">Групповые занятия</h3>
                            <p className="plan-description">
                                Обучение в мини-группах до 6 человек
                            </p>
                            <div className="plan-price">
                                <span className="price-amount">3 000 ₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                        </div>

                        <ul className="features-list">
                            <li>✔ 8 занятий в месяц</li>
                            <li>✔ Онлайн-материалы</li>
                            <li>✔ Проверка домашних заданий</li>
                            <li>✔ Поддержка преподавателя</li>
                        </ul>

                        <button className="plan-select-btn">
                            Записаться
                        </button>
                    </div>

                    <div className="plan-card popular">
                        <div className="popular-badge">Популярно</div>

                        <div className="plan-header">
                            <h3 className="plan-name">Индивидуальные занятия</h3>
                            <p className="plan-description">
                                Персональная программа под цели ученика
                            </p>
                            <div className="plan-price">
                                <span className="price-amount">1 500 ₽</span>
                                <span className="price-period">/ занятие</span>
                            </div>
                        </div>

                        <ul className="features-list">
                            <li>✔ Индивидуальный план</li>
                            <li>✔ Гибкое расписание</li>
                            <li>✔ Разбор ошибок</li>
                            <li>✔ Максимальный результат</li>
                        </ul>

                        <button className="plan-select-btn">
                            Записаться
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}
