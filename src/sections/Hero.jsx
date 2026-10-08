import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Hero.module.css';
import profilePic from "../assets/1000051447.jpg.jpeg"

export default function Hero() {
  const { name, role, tagline } = portfolioData.about;

  return (
    <section id="hero" className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <motion.div 
          className={styles.status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.pulse}></span>
          <span className="mono">Open to work</span>
        </motion.div>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I'm {name}. <br/>
          <span className={styles.role}>{role}</span>
        </motion.h1>

        <motion.p 
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tagline}
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#projects" className={styles.primaryBtn}>
            View Work <ArrowRight size={18} />
          </a>
          <a href="/resume/Manikandan_N_SoftwareEngineer_Resume.pdf" download className={styles.secondaryBtn} aria-label="Download Resume (PDF)">
            <Download size={18} /> Download Resume
            <span className={styles.fileHint}>PDF · 240 KB</span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        className={styles.imageWrapper}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className={styles.imageFrame}>
          <picture>
            <source srcSet={profilePic} type="image/jpg" />
            <img 
              src={profilePic} 
              alt={name} 
              className={styles.image}
              width="400"
              height="400"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          <div className={styles.imageBackdrop}></div>
        </div>
      </motion.div>
    </section>
  );
}
