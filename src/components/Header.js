import { useState } from 'react';
import { headerNav } from '../constants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollLink = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header id="header" className="header" role="banner">
      <div className="header_inner">
        <div className="header_logo">
          <h1>
            <a href="/">
              portfolio<em>react.js</em>
            </a>
          </h1>
        </div>
        <nav className={`header_nav ${menuOpen ? 'show' : ''}`} role="navigation">
          <ul>
            {headerNav.map((nav) => (
              <li key={nav.title}>
                <a href={nav.url} onClick={scrollLink}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`header_nav_mobile ${menuOpen ? 'active' : ''}`}
          aria-controls="primary-menu"
          aria-expanded={menuOpen.toString()}
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
