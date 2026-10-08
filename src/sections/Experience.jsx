import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className={`container section-padding`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mono">/03. EXPERIENCE</h2>
        <div className={styles.line}></div>
      </motion.div>

      <div className={styles.grid}>
        {/* Experience Timeline */}
        <div className={styles.timelineWrapper}>
          <h3 className={styles.columnTitle}>Work</h3>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.marker}></div>
                <div className={styles.content}>
                  <div className={styles.period}><span className="mono">{exp.period}</span></div>
                  <h4 className={styles.role}>{exp.role}</h4>
                  <div className={styles.company}>{exp.company}, {exp.location}</div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className={styles.timelineWrapper}>
          <h3 className={styles.columnTitle}>Education</h3>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.marker}></div>
                <div className={styles.content}>
                  <div className={styles.period}><span className="mono">{edu.period}</span></div>
                  <h4 className={styles.role}>{edu.degree}</h4>
                  <div className={styles.company}>{edu.institution}</div>
                  <p className={styles.description}>{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
