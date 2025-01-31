import React from 'react';
import styles from './Section7.module.scss';

const reviews = [
  {
    name: 'ВЛАД',
    text: 'Игорь благодарность за открытие вебинаров Смотрим как Рабыню Изауру сыну отправил он в High school сейчас но уже 4 года торгует по вашей тематике Grade Primary обучал концепцию ГД это у него проект такой был. В общем ребенок купил себе Мустанг и совершенно финансово не зависим. Долгих вам лет и крепкого здоровья',
    image: '/VladM.png', // Замените на актуальный путь к изображению
  },
  {
    name: 'ИГОРЬ ТОЩАКОВ',
    text: 'Получил сие только что от камрада Андрея... Горжусь учеником... Берите с него пример... А теперь цитата: "Игорь, добрый вечер! Сегодня у меня знаковый день... Я полностью отбил затраты на обучение... Ещё и сверх этого добавил... 26 мая этого года открыл первую позицию на Форексе... сейчас в хорошем плюсе... И всё это благодаря твоему курсу, заботе и вниманию о нас... Большое тебе спасибо!!" Так вот, я желаю получить нечто подобное от каждого камрада до конца сего года... А потому учитесь прилежно и действуйте внимательно.',
    image: '/IgorKvadrat.png', // Замените на актуальный путь к изображению
  }
];

const Section7 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>ОТЗЫВЫ</span> О КУРСЕ
        </h2>
        <h3 className={styles.subtitle}>ОТ УСПЕШНЫХ ТРЕЙДЕРОВ</h3>
      </div>
      <div className={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <img src={review.image} alt={review.name} className={styles.avatar} />
            <div className={styles.reviewContent}>
              <h4 className={styles.reviewName}>{review.name}</h4>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button}>Все отзывы →</button>
    </section>
  );
};

export default Section7;
