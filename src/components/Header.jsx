import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="logo" onClick={() => window.scrollTo(0,0)}>JS</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`ph ${isMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-list">
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li> 
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li> 
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;