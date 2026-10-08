import { portfolioData } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>
          &copy; {currentYear} {portfolioData.about.name}. All rights reserved.
        </p>
        <p className={styles.credit}>
          Designed & Built with <span className={styles.heart}>&hearts;</span>
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={styles.backToTop}
          aria-label="Back to top"
        >
          Top &uarr;
        </button>
      </div>
    </footer>
  );
}
