// Header.jsx

import { useState } from 'react';
import './Header.scss';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a
          href="#heroSection"
          className="header__logo"
          aria-label="Jade Touch home"
          onClick={closeMenu}
        >
          <img
            className="header__logo-img"
            src="/img/HeaderLogo/logo01.png"
            alt="Jade Touch"
            width="160"
            height="48"
          />
        </a>

        <button
          type="button"
          className="header__burger"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="header-nav"
          onClick={toggleMenu}
        >
          <span className="header__burger-line" aria-hidden="true" />
          <span className="header__burger-line" aria-hidden="true" />
          <span className="header__burger-line" aria-hidden="true" />
        </button>

        <nav
          id="header-nav"
          className={`header__nav${isOpen ? ' header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="header__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="header__item">
                <a href={link.href} className="header__link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;