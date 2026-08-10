import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';

interface NavbarProps {
  activeSection: string;
}

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { id: 'hero', label: t('navigation.home') },
    { id: 'about', label: t('navigation.profile') },
    { id: 'experience', label: t('navigation.experience') },
    { id: 'projects', label: t('navigation.projects') },
    // GitHub repos section disabled for now — see App.tsx.
    { id: 'certificates', label: t('navigation.certificates') },
    { id: 'technologies', label: t('navigation.technologies') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        >
          SR
        </a>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            className="control-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? (t('buttons.lightMode') as string) : (t('buttons.darkMode') as string)}
            title={theme === 'dark' ? (t('buttons.lightMode') as string) : (t('buttons.darkMode') as string)}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="control-btn lang-btn"
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            aria-label="Cambiar idioma / Change language"
            title="Cambiar idioma / Change language"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t('navigation.closeMenu') as string : t('navigation.openMenu') as string}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
