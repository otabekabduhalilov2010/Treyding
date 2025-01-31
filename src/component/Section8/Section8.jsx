import React, { useState } from 'react';
import s from './Section8.module.scss';

const Section8 = () => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
  });

  const BOT_TOKEN = "7556415457:AAG_o-ULD3NptvbBxYasq5mgjK5K2EKgowg"; // Укажи токен бота
  const CHAT_ID = "6059580218"; // Укажи chat_id

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      📩 Новая заявка:
      📞 Телефон: ${formData.phone}
      👤 Имя: ${formData.name}
      📧 E-mail: ${formData.email}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });
      alert("Заявка отправлена!");
      setFormData({ phone: '', name: '', email: '' });
    } catch (error) {
      alert("Ошибка отправки!");
    }
  };

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.content}>
          <div className={s.img}>
            <img src="./tablets.png" alt="" />
          </div>
          <div className={s.inputt}>
            <h2 className={s.title}>ОБРАТНАЯ <span>СВЯЗЬ</span></h2>
            <p className={s.subtitle}><span>ПОМОЖЕМ</span> ВЫБРАТЬ!</p>
            <p className={s.description}>
              Если у вас есть вопросы о формате <br /> или вы не знаете что выбрать, оставьте свой номер. <br />
              Мы позвоним, чтобы ответить на все ваши вопросы.
            </p>
            <form className={s.form} onSubmit={handleSubmit}>
              <input type="text" name="phone" placeholder="Телефон" className={s.input} value={formData.phone} onChange={handleChange} required />
              <input type="text" name="name" placeholder="Имя" className={s.input} value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail" className={s.input} value={formData.email} onChange={handleChange} required />
              <button type="submit" className={s.button}>
                Отправить <span role="img" aria-label="send">📩</span>
              </button>
            </form>
            <p className={s.privacy}>
              Нажимая на кнопку, я соглашаюсь на <br /> обработку персональных данных и <br /> с правилами пользования Платформой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
