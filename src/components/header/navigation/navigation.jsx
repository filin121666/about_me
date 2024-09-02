import "./navigation.css";
import NavLinkButton from "./nav_link/nav_link.jsx";
import { useState, useEffect, useRef } from "react";

function Navigation({ page, setPage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); // Создаем реф для меню
    const buttonRef = useRef(null); // Создаем реф для кнопки меню

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navigation-container">
            <button className="menu-button" onClick={toggleMenu} ref={buttonRef}>
                <img src="/menu-button.svg" alt="menu" className="menu-button-icon"/>
            </button>
            <div className={`navigation ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                <NavLinkButton
                    isActive={page === "home"}
                    onClick={() => setPage("home")}
                >
                    Главная
                </NavLinkButton>
                <NavLinkButton
                    isActive={page === "skills"}
                    onClick={() => setPage("skills")}
                >
                    Навыки, технологии и прочее
                </NavLinkButton>
                <NavLinkButton
                    isActive={page === "achievements"}
                    onClick={() => setPage("achievements")}
                >
                    Достижения
                </NavLinkButton>
            </div>
        </div>
    );
}

export default Navigation;