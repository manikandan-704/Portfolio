import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Navbar.module.css';
import { clsx } from 'clsx';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background and shadow
      setIsScrolled(currentScrollY > 50);

      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section highlighting
      const sections = ['hero', 'about', 'projects', 'experience', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle focus trap and escape for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={clsx(styles.header, {
        [styles.scrolled]: isScrolled,
        [styles.hidden]: !isVisible && !mobileMenuOpen
      })}
    >
      <nav className={`container ${styles.nav}`}>
        <a href="#hero" className={styles.logo}>
          M<span className={styles.dot}>.</span>
        </a>

        <div className={styles.desktopNav}>
          <ul className={styles.navItems}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={clsx(styles.navLink, 'mono', {
                    [styles.active]: activeSection === link.href.substring(1)
                  })}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className={styles.actions}>
            <button 
              onClick={toggleTheme} 
              className={styles.iconBtn}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="/resume/Manikandan_N_SoftwareEngineer_Resume.pdf" 
              download 
              className={styles.resumeBtn}
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={clsx(styles.mobileMenu, { [styles.mobileMenuOpen]: mobileMenuOpen })}>
        <ul className={styles.mobileNavItems}>
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={link.href} 
                className={clsx(styles.mobileNavLink, 'mono')}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          <button onClick={toggleTheme} className={styles.mobileIconBtn}>
             {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
          </button>
        </div>
      </div>
    </header>
  );
}
