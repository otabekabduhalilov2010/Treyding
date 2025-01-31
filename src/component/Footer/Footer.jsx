import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <>
    <section className={s.section}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.title}>
                    <img src="./Logo.png" alt="" />
                    <a href="">Обучающие ролики</a>
                    <a href="">Подкаст L.A.Igrok</a>
                    <a href="">Личный кабинет</a>

                    <p>ИНН: 9701168470</p>
                    <p>ОГРН: 1207700502206</p>
                    <p>г. Москва, ул.Макаренко, 2/21 стр. 2</p>

                    <p>Аврора: платформа знаний и центр развития бизнеса</p>
                </div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.48002514339!2d69.1969663732792!3d41.28269707465951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1738321874935!5m2!1sru!2s" width="550" height="260" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer