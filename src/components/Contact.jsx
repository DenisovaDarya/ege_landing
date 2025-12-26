import { useState } from 'react';

export default function Contact() {
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isLoading, setIsLoading] = useState(false);

 const submit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  // Имитация асинхронной отправки
  await new Promise(resolve => setTimeout(resolve, 1000));

  alert(`Имя: ${name}, Телефон: ${phone}`);
  localStorage.setItem('formData', JSON.stringify({ name, phone }));

  setIsLoading(false);
  setIsSubmitted(true);
  setName('');
  setPhone('');

  // Сброс состояния через 3 секунды
  setTimeout(() => setIsSubmitted(false), 3000);
 };

 return (
     <section id="contact" className="contact-section">
      <div className="contact-container">
       <div className="contact-header">
        <h2 className="contact-title">Оставить заявку</h2>
        <p className="contact-subtitle">Мы свяжемся с вами в ближайшее время</p>
       </div>

       <form onSubmit={submit} className="contact-form">
        <div className="form-group">
         <label htmlFor="name" className="form-label">
          Имя *
         </label>
         <input
             id="name"
             type="text"
             required
             placeholder="Введите ваше имя"
             value={name}
             onChange={e => setName(e.target.value)}
             className="form-input"
             disabled={isLoading}
         />
         <div className="input-underline"></div>
        </div>

        <div className="form-group">
         <label htmlFor="phone" className="form-label">
          Телефон *
         </label>
         <input
             id="phone"
             type="tel"
             required
             placeholder="+7 (___) ___-__-__"
             value={phone}
             onChange={e => setPhone(e.target.value)}
             className="form-input"
             disabled={isLoading}
         />
         <div className="input-underline"></div>
        </div>

        <button
            type="submit"
            className={`submit-btn ${isLoading ? 'loading' : ''} ${isSubmitted ? 'success' : ''}`}
            disabled={isLoading}
        >
         {isLoading ? (
             <>
              <span className="spinner"></span>
              Отправка...
             </>
         ) : isSubmitted ? (
             <>
              <svg className="success-icon" viewBox="0 0 24 24">
               <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Отправлено!
             </>
         ) : (
             'Отправить заявку'
         )}
        </button>

        <p className="form-note">
         Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
       </form>

       {isSubmitted && (
           <div className="success-message">
            <p>Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 15 минут.</p>
           </div>
       )}
      </div>
     </section>
 );
}