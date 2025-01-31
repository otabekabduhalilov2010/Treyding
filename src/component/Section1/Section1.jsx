import React from 'react'
import s from './Section1.module.scss'

const Section1 = () => {
  return (
   <>
   <section className={s.section}>
    <div className="container">
        <div className={s.wrap}>
            <p>Остроумная торговля по</p>
            <h5>методу igroka</h5>
            <h1>платформа <br /> подготовки <br /> трейдеров </h1>
            <p>Получи статистическое преимущество <br /> на фондовой бирже уже сегодня</p>
            <button>Пробный урок <img src="./clik.png" alt="" /></button>
        </div>
    </div>
   </section>
   </>
  )
}

export default Section1
