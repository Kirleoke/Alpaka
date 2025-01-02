import React, { useState } from "react";
import styles from "./../styles/menu.module.scss";

const Menu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubOffer, setActiveSubOffer] = useState(false);
    const [submenuTimeout, setSubmenuTimeout] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
    };

    const handleMouseEnter = (submenu) => {
        if (submenuTimeout) {
            clearTimeout(submenuTimeout); // Очищаем таймер, если курсор вернулся
            setSubmenuTimeout(null);
        }
        if (submenu === "offer") {
            setActiveSubOffer(true);
        } else {
            setActiveSubMenu(submenu);
        }
    };

    const handleMouseLeave = (submenu) => {
        const timeout = setTimeout(() => {
            if (submenu === "offer") {
                setActiveSubOffer(false);
            } else {
                setActiveSubMenu(null);
            }
        }, 300); // Задержка в миллисекундах
        setSubmenuTimeout(timeout);
    };

    return (
        <header className={styles.menu}>
            <div className={styles.menu__container}>
                <a href="/" className={styles.menu__logo}>
                    h.M
                </a>
                <nav
                    className={`${styles.menu__nav} ${isMobileMenuOpen ? styles["menu__nav--active"] : ""}`}
                >
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>
                                Главная
                            </a>
                        </li>

                        {/* Основное меню */}
                        <li
                            className={`${styles.menu__item} ${activeSubMenu === "main" ? styles["menu__item--active"] : ""}`}
                            onMouseEnter={() => handleMouseEnter("main")}
                            onMouseLeave={() => handleMouseLeave("main")}
                        >
                            <a className={styles.menu__link}>
                                <span>Основное меню</span>
                                <span className={styles.menu__arrow}></span>
                            </a>
                            <ul
                                className={`${styles.menu__submenu} ${activeSubMenu === "main" ? styles["menu__submenu--visible"] : ""}`}
                            >
                                <li>
                                    <a href="#" className={styles["menu__submenu-link"]}>
                                        Заказать верстку
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles["menu__submenu-link"]}>
                                        Отправить макет на проверку
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles["menu__submenu-link"]}>
                                        Хочу работать у вас
                                    </a>
                                </li>
                                <li
                                    className={`${styles["menu__submenu-item"]}`}
                                    onMouseEnter={() => handleMouseEnter("offer")}
                                    onMouseLeave={() => handleMouseLeave("offer")}
                                >
                                    <a href="#" className={styles["menu__submenu-link"]}>
                                        <span>Есть предложение</span>
                                        <span className={styles.menu__arrow__second}></span>
                                    </a>
                                    <ul
                                        className={`${styles.menu__submenu} ${activeSubOffer ? styles["menu__submenu--visible"] : ""}`}
                                    >
                                        <li>
                                            <a href="#" className={styles["menu__submenu-link"]}>
                                                У меня есть оффер
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={styles["menu__submenu-link"]}>
                                                Сделать партнёром
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>
                                Наши сервисы
                            </a>
                        </li>
                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Бургер-меню */}
                <button
                    className={styles.menu__burger}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                ></button>

                {/* Телефон */}
                <a href="tel:+123456789" className={styles.menu__phone}>
                    <span className={styles["menu__phone-icon"]}></span>
                    <span className={styles["menu__phone-number"]}>+1 (321) 222 - 33 - 33</span>
                </a>
            </div>
            <div
                className={`${styles.menu__overlay} ${isMobileMenuOpen ? styles["menu__overlay--active"] : ""}`}
                onClick={toggleMobileMenu}
            ></div>
        </header>
    );
};

export default Menu;
