import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './About.module.css';

export default function About() {
  const { bio, location, skills } = portfolioData.about;

  return (
    <section id="about" className={`container section-padding`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mono">/01. ABOUT</h2>
        <div className={styles.line}></div>
      </motion.div>

      <div className={styles.grid}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className={styles.bio}>{bio}</p>
          <div className={styles.fact}>
            <span className="mono">Location:</span> {location}
          </div>
        </motion.div>

        <motion.div 
          className={styles.skillsWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={styles.skillsTitle}>Technical Arsenal</h3>
          <div className={styles.skillsStack}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <h4 className="mono">{category}</h4>
                <div className={styles.tags}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
