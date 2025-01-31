import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <div className={s.menu}>
            <div className={s.link}>
              {/* Добавляем ссылку на главную страницу */}
              <Link to="/">
                <img src="./Logo.png" alt="Логотип" />
              </Link>
              <Link to="/about">Об авторе</Link>
              <Link to="/learning">Обучение</Link>
              <Link to="/community">Сообщество</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
            <button>Связаться</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
