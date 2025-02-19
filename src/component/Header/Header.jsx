import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <div className={s.menu}>
            {/* Логотип слева */}
            <div className={s.logo}>
              <Link to="/">
                <img src="./Logo.png" alt="Логотип" />
              </Link>
            </div>

            {/* Ссылки для ПК-версии */}
            <div className={s.link}>
              <Link to="/about">Об авторе</Link>
              <Link to="/learning">Обучение</Link>
              <Link to="/community">Сообщество</Link>
              <Link to="/book">Книга</Link>
              <a href="https://t.me/nikita_kremlev">Связаться</a>
            </div>

            {/* Бургер-иконка */}
            <div 
              className={`${s.burger} ${dropdownOpen ? s.active : ''}`} 
              onClick={toggleDropdown}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Fullscreen Menu для мобильной версии */}
            <div className={`${s.fullscreenMenu} ${dropdownOpen ? s.open : ''}`}>
              <Link to="/about" onClick={toggleDropdown}>Об авторе</Link>
              <Link to="/learning" onClick={toggleDropdown}>Обучение</Link>
              <Link to="/community" onClick={toggleDropdown}>Сообщество</Link>
              <Link to="/book" onClick={toggleDropdown}>Книга</Link>
              <a href="https://t.me/nikita_kremlev" onClick={toggleDropdown}>Связаться</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
