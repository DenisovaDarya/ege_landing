export default function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Подготовка к ЕГЭ</h1>
                    <p>Групповые и индивидуальные занятия с экспертами</p>
                </div>

                <a
                    href="#contact"
                    className="hero-btn"
                    onClick={scrollToContact}
                >
                    Записаться
                </a>
            </div>
        </section>
    );
}