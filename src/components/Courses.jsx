export default function Courses() {
    const subjects = [
        { name: "Русский язык", icon: "📝", color: "#667eea" },
        { name: "Математика", icon: "➗", color: "#764ba2" },
        { name: "Информатика", icon: "💻", color: "#f56565" },
        { name: "Физика", icon: "⚛️", color: "#ed8936" },
        { name: "Химия", icon: "🧪", color: "#38b2ac" },
        { name: "Обществознание", icon: "🏛️", color: "#4299e1" },
        { name: "История", icon: "📜", color: "#9f7aea" },
        { name: "Биология", icon: "🧬", color: "#48bb78" }
    ];

    const groupSchedule = [
        { day: "Понедельник", time: "18:00-20:00", subject: "Математика", type: "Профильный" },
        { day: "Вторник", time: "18:00-20:00", subject: "Русский язык", type: "Базовый" },
        { day: "Среда", time: "17:00-19:00", subject: "Информатика", type: "Профильный" },
        { day: "Четверг", time: "18:00-20:00", subject: "Физика", type: "Профильный" },
        { day: "Пятница", time: "17:00-19:00", subject: "Химия", type: "Профильный" },
        { day: "Суббота", time: "11:00-13:00", subject: "Обществознание", type: "Базовый" }
    ];

    const individualFeatures = [
        { icon: "⏰", title: "Любое время", text: "Выбирайте удобное время занятий" },
        { icon: "📅", title: "Гибкий график", text: "Меняйте расписание по необходимости" },
        { icon: "🎯", title: "Личный план", text: "Индивидуальная программа под ваши цели" },
        { icon: "👨‍🏫", title: "Личный преподаватель", text: "Персональное внимание эксперта" }
    ];

    return (
        <section id="courses" className="courses">
            <div className="courses-container">
                {/* Заголовок */}
                <div className="courses-header">
                    <h2>Курсы</h2>
                    <p>Выберите предмет и формат подготовки к ЕГЭ</p>
                </div>

                {/* Блок карточек с предметами */}
                <div className="cards-section">
                    <h3>Перечень предметов</h3>
                    <div className="cards">
                        {subjects.map((subject, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{ borderColor: subject.color }}
                            >
                                <div
                                    className="card-icon"
                                    style={{ backgroundColor: `${subject.color}20` }}
                                >
                                    <span style={{ color: subject.color }}>{subject.icon}</span>
                                </div>
                                <h4>{subject.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Расписание */}
                <div className="schedule-sections">
                    {/* Групповые занятия */}
                    <div className="group-schedule">
                        <div className="schedule-header">
                            <h3>Групповые занятия</h3>
                            <div className="schedule-badge">2 раза в неделю</div>
                        </div>

                        <div className="schedule-table">
                            {groupSchedule.map((item, index) => (
                                <div key={index} className="schedule-row">
                                    <span className="day">{item.day}</span>
                                    <span className="time">{item.time}</span>
                                    <span className="subject">{item.subject}</span>
                                    <span className={`type ${item.type.toLowerCase()}`}>
                   {item.type}
                 </span>
                                </div>
                            ))}
                        </div>

                        <p className="schedule-note">
                            Занятия проходят онлайн в группах до 10 человек
                        </p>
                    </div>

                    {/* Индивидуальные занятия */}
                    <div className="individual-schedule">
                        <div className="schedule-header">
                            <h3>Индивидуальные занятия</h3>
                            <div className="schedule-badge">Гибкое расписание</div>
                        </div>

                        <div className="individual-features">
                            {individualFeatures.map((feature, index) => (
                                <div key={index} className="feature">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-content">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="individual-info">
                            <p className="info-text">
                                • Длительность: 60-90 минут<br/>
                                • Частота: от 1 до 5 раз в неделю<br/>
                                • Формат: онлайн или очно
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}