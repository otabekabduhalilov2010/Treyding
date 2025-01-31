import React from 'react';
import s from './TestimonialsSection.module.scss';

const testimonials = [
  {
    name: 'Николай С.',
    date: '1 день назад',
    rating: 5,
    text: 'Год торговал по методе [Grokka, Рад], что прошел эту программу. 100% выжимка.'
  },
  {
    name: 'Ирина К.',
    date: '1 день назад',
    rating: 5,
    text: 'Стала понимать логику рынка, приобрела торговую дисциплину и вышла на стабильные +20% к депо.'
  }
];

const StarRating = ({ count }) => (
  <div className={s.stars}>
    {Array.from({ length: count }).map((_, index) => (
      <span key={index}>&#9733;</span> // Unicode star character
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className={s.testimonialsSection}>
      <div className={s.navigation}>
        <button className={s.navButton}>&#8249;</button>
        <div className={s.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={s.testimonialCard}>
              <h3 className={s.name}>{testimonial.name}</h3>
              <p className={s.date}>{testimonial.date}</p>
              <StarRating count={testimonial.rating} />
              <p className={s.text}>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className={s.navButton}>&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
