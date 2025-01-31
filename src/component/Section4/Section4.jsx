import React from 'react';
import s from './Section4.module.scss';

const steps = [
  'Прочтите книгу «Forex – игра на деньги»',
  'Получите представление об основных терминах и понятиях в трейдинге',
  'Пройдите курс для начинающих трейдеров',
  'Пройдите курс для профессионалов',
  'Изучите торговые шаблоны',
  'Трейдинг – это постоянное обучение. Не останавливайтесь. Никогда',
  'Выработайте свою собственную стратегию торговли',
  'Участвуйте в еженедельных субботних интерактивах',
  'Адаптируйте их под свой стиль торговли',
  'Изучите основы в психологии трейдинга'
];

const Section4 = () => {
  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>КАК НАЧАТЬ</h2>
        <h3 className={s.subtitle}>УСПЕШНО ТОРГОВАТЬ НА ФОНДОВОМ РЫНКЕ</h3>
      </div>
      <div className={s.stepsContainer}>
    
        {steps.map((step, index) => (
          <div key={index} className={s.stepItem}>
            <div className={s.checkmark}>✓</div>
            <p className={s.stepText}>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
