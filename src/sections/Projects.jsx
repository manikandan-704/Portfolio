import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.6 5.2 5.2 0 0 0-.1-3.6s-1.1-.4-3.6 1.3a12.8 12.8 0 0 0-6.6 0C6.1 2.3 5 2.7 5 2.7a5.2 5.2 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);
import { portfolioData } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className={`container section-padding`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mono">/02. PROJECTS</h2>
        <div className={styles.line}></div>
      </motion.div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSummary}>{project.summary}</p>
              
              <ul className={styles.projectDetails}>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              <div className={styles.techStack}>
                {project.techStack.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                {project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {project.repoLink !== '#' && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <GithubIcon size={18} /> Source Code
                  </a>
                )}
              </div>
            </div>

            <div className={styles.projectImageWrapper}>
              <div className={styles.imageFrame}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className="mono">{project.title}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
