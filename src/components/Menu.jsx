import React, { useState, useEffect } from "react";
import styles from "./../styles/menu.module.scss";

const Menu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [icons, setIcons] = useState({ burgerIcon: "", phoneIcon: "" });

    // Функция для получения данных из API
    const fetchIcons = async () => {
        try {
            const response = await fetch("...");
            const data = await response.json();
            setIcons({
                burgerIcon: data.burgerIcon,
                phoneIcon: data.phoneIcon,
            });
        } catch (error) {
            console.error("Ошибка при загрузке иконок:", error);
        }
    };

    // Вызываем fetchIcons при монтировании компонента
    useEffect(() => {
        fetchIcons();
    }, []);

    // Переключение бургер-меню
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Открытие подменю для мобильных версий
    const toggleSubMenu = (menu) => {
        setActiveSubMenu(activeSubMenu === menu ? null : menu);
    };
    const [activeSubOffer, setActiveSubOffer] = useState(false);


    return (
        <header className={styles.menu}>
            <div className={styles.menu__container}>
                <a href="/" className={styles.menu__logo}>h.M</a>
                <nav
                    className={`${styles.menu__nav} ${isMobileMenuOpen ? styles["menu__nav--active"] : ""}`}
                >
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Главная</a>
                        </li>

                        {/* Основное меню */}
                        <li
                            className={`${styles.menu__item} ${
                                activeSubMenu === "main" ? styles["menu__item--active"] : ""
                            }`}
                            onMouseEnter={() => setActiveSubMenu("main")}
                            onMouseLeave={() => setActiveSubMenu(null)}
                        >
                            <a className={styles.menu__link}>
                                Основное меню
                            </a>
                            <ul className={styles.menu__submenu}>
                                <li>
                                    <a href="#" className={styles["menu__submenu-link"]}>Заказать верстку</a>
                                </li>
                                <li>
                                    <a href="#" className={styles["menu__submenu-link"]}>
                                        Отправить макет на проверку
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles["menu__submenu-link"]}>Хочу работать у вас</a>
                                </li>
                                <li
                                    className={`${styles["menu__submenu-item"]}`}
                                    onMouseEnter={() => setActiveSubOffer(true)}
                                    onMouseLeave={() => setActiveSubOffer(false)}
                                >
                                    <a href="#" className={styles["menu__submenu-link"]}>Есть предложение</a>
                                    <ul
                                        className={`${styles.menu__submenu} ${activeSubOffer ? styles["menu__submenu--visible"] : ""}`}
                                        onMouseEnter={() => setActiveSubOffer(true)}
                                        onMouseLeave={() => setActiveSubOffer(false)}
                                    >
                                        <li>
                                            <a href="#" className={styles["menu__offer-submenu-link"]}>У меня есть оффер</a>
                                        </li>
                                        <li>
                                            <a href="#" className={styles["menu__offer-submenu-link"]}>Сделать партнёром</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Наши сервисы</a>
                        </li>
                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Контакты</a>
                        </li>
                    </ul>
                </nav>

                {/* Бургер-меню */}
                <button
                    className={styles.menu__burger}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    style={{
                        backgroundImage: `url(alpaca-menu/src/assets/burger.svg)`,
                        // backgroundSize: "cover",
                    }}
                ></button>

                {/* Телефон */}
                <a href="tel:+123456789" className={styles.menu__phone}>
                    <span
                        className={styles["menu__phone-icon"]}
                        style={{
                            backgroundImage: `url(alpaca-menu/src/assets/Vector.svg)`,
                            backgroundSize: "contain",
                        }}
                    ></span>
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
