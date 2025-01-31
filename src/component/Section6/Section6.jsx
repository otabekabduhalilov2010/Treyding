import React from 'react'
import s from './Section6.module.scss'

const Section6 = () => {
  return (
    <>
    <section className={s.section}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.title}>
                    <h1>Вступить в сообщество <br /> професионалов</h1>
                    <p>Чaт созданный  для eдинoмышлeнникoв <br /> и последователей метода Игоря Тощакова</p>
                    <button>Вступить в чат <img src="./clik.png" alt="" /></button>
                </div>
                    <div className={s.phone}>
                        <img src="./Phone1.png" alt="" />
                        <img src="./Phone2.png" alt="" />
                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section6
