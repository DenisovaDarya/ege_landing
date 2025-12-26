export default function Teachers() {
    const teachers = [
        {
            id: 1,
            name: "Анна Сергеева",
            subject: "Русский язык",
            experience: "12 лет опыта",
            description: "Эксперт ЕГЭ, автор методических пособий. 95% учеников сдают на 90+ баллов",
            avatar: "👩‍🏫",
            color: "#667eea"
        },
        {
            id: 2,
            name: "Михаил Волков",
            subject: "Математика",
            experience: "15 лет опыта",
            description: "Кандидат наук, подготовил 50+ стобалльников. Автор задач повышенной сложности",
            avatar: "👨‍🏫",
            color: "#764ba2"
        },
        {
            id: 3,
            name: "Елена Петрова",
            subject: "Информатика",
            experience: "10 лет опыта",
            description: "Разработчик в IT-компании, эксперт по программированию. 85% учеников поступают в топ-вузы",
            avatar: "👩‍💻",
            color: "#f56565"
        },
        {
            id: 4,
            name: "Дмитрий Иванов",
            subject: "Физика",
            experience: "8 лет опыта",
            description: "Победитель олимпиад, автор курса по решению сложных задач. Ученики побеждают на всероссийских олимпиадах",
            avatar: "👨‍🔬",
            color: "#ed8936"
        }
    ];

    return (
        <section className="teachers">
            <div className="teachers-container">
                <div className="teachers-header">
                    <h2>Преподаватели</h2>
                    <p>Профессионалы с опытом подготовки к ЕГЭ</p>
                </div>

                <div className="teachers-grid">
                    {teachers.map((teacher) => (
                        <div
                            key={teacher.id}
                            className="teacher-card"
                            style={{ '--teacher-color': teacher.color }}
                        >
                            <div className="teacher-avatar">
                                <div
                                    className="avatar-circle"
                                    style={{
                                        background: `${teacher.color}20`,
                                        borderColor: teacher.color
                                    }}
                                >
                 <span style={{ color: teacher.color, fontSize: '2.5rem' }}>
                   {teacher.avatar}
                 </span>
                                </div>
                            </div>

                            <div className="teacher-info">
                                <h3 className="teacher-name">{teacher.name}</h3>
                                <div className="teacher-subject">{teacher.subject}</div>
                                <div className="teacher-experience">
                                    <span className="exp-icon">⏳</span>
                                    {teacher.experience}
                                </div>
                                <p className="teacher-description">{teacher.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="teachers-stats">
                    <div className="stat-card">
                        <div className="stat-number">100+</div>
                        <div className="stat-label">учеников в год</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">95%</div>
                        <div className="stat-label">сдают на 80+ баллов</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">стобалльников</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">лет средний стаж</div>
                    </div>
                </div>
            </div>
        </section>
    );
}