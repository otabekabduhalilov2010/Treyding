import React from 'react'
import s from './Section5.module.scss'

const Section5 = () => {
  return (
    <>
    <section className={s.section}>
        <div className="container">
            <div className={s.wrap}>
                <img src="./Planshed.png" alt="" />
                <div className={s.title}>
                    <h1>Записатьсяна <br /> пробный <br /> интерактив</h1>
                    <p>Выбери успешную торговую стратегию  
                    вместе с Игорем Тощаковым </p>
                    <p>Уровень - профессионал</p>
                    <div className={s.suma}>
                    <s>12900 руб</s>
                    
                    <b>7500 руб.</b>
                    </div>
                        <button>Пробный урок <img src="./clik.png" alt="" /></button>
                        <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных с правилами пользования платформой</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section5
