import { useState } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Иван Петров",
            score: 88,
            subject: "математике",
            text: "Благодаря системному подходу и грамотным объяснениям преподавателя смог поднять балл с 60 до 88. Особенно помогли пробные экзамены",
            avatar: "👨‍🎓"
        },
        {
            id: 2,
            name: "Мария Сидорова",
            score: 95,
            subject: "русскому языку",
            text: "Индивидуальные занятия помогли проработать все сложные моменты. Результат превзошел ожидания!",
            avatar: "👩‍🎓"
        },
        {
            id: 3,
            name: "Алексей Козлов",
            score: 91,
            subject: "информатике",
            text: "Платформа помогла структурировать знания и отработать решение сложных задач. Рекомендую!",
            avatar: "👨‍💻"
        }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({
        name: '',
        score: '',
        subject: '',
        text: ''
    });

    const handleAddReview = (e) => {
        e.preventDefault();

        if (!newReview.name || !newReview.score || !newReview.subject || !newReview.text) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const review = {
            id: reviews.length + 1,
            name: newReview.name,
            score: parseInt(newReview.score),
            subject: newReview.subject.toLowerCase(),
            text: newReview.text,
            avatar: "👤"
        };

        setReviews([review, ...reviews]);
        setNewReview({ name: '', score: '', subject: '', text: '' });
        setShowForm(false);
        alert('Отзыв добавлен!');
    };

    const handleChange = (e) => {
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="reviews">
            <div className="reviews-container">
                <div className="reviews-header">
                    <h2>Отзывы учеников</h2>
                    <p>Реальные результаты наших выпускников</p>

                    <button
                        className="add-review-btn"
                        onClick={() => setShowForm(true)}
                    >
                        + Добавить отзыв
                    </button>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="review-card"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="review-header">
                                <div className="review-avatar">{review.avatar}</div>
                                <div className="review-info">
                                    <h3>{review.name}</h3>
                                    <div className="review-score">
                                        <span className="score-number">{review.score}</span>
                                        <span className="score-label">баллов по {review.subject}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="review-body">
                                <p>{review.text}</p>
                            </div>

                            <div className="review-rating">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Модальное окно для добавления отзыва */}
                {showForm && (
                    <div className="modal-overlay" onClick={() => setShowForm(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="modal-close"
                                onClick={() => setShowForm(false)}
                            >
                                ×
                            </button>

                            <h3>Добавить отзыв</h3>

                            <form onSubmit={handleAddReview} className="review-form">
                                <div className="form-group">
                                    <label htmlFor="name">Ваше имя *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={newReview.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="score">Ваш балл *</label>
                                    <input
                                        type="number"
                                        id="score"
                                        name="score"
                                        value={newReview.score}
                                        onChange={handleChange}
                                        min="0"
                                        max="100"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Предмет *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={newReview.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="text">Текст отзыва *</label>
                                    <textarea
                                        id="text"
                                        name="text"
                                        value={newReview.text}
                                        onChange={handleChange}
                                        placeholder="Поделитесь своим опытом..."
                                        rows="4"
                                        required
                                    />
                                </div>

                                <div className="form-actions">
                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Отмена
                                    </button>
                                    <button
                                        type="submit"
                                        className="submit-btn"
                                    >
                                        Добавить отзыв
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}