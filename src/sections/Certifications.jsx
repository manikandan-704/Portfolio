import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Certifications.module.css';
import { clsx } from 'clsx';

export default function Certifications() {
  const [filter, setFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  
  const { certifications } = portfolioData;
  const categories = ['All', ...new Set(certifications.map(c => c.category))];

  const filteredCerts = filter === 'All' 
    ? certifications 
    : certifications.filter(c => c.category === filter);

  // Handle escape key for modal
  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className={`container section-padding`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mono">/04. CERTIFICATIONS</h2>
        <div className={styles.line}></div>
      </motion.div>

      <div className={styles.filters}>
        {categories.map(cat => (
          <button 
            key={cat}
            className={clsx(styles.filterBtn, { [styles.activeFilter]: filter === cat })}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence>
          {filteredCerts.map((cert, index) => (
            <motion.div
              layout
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={styles.card}
            >
              <div 
                className={styles.thumbnailWrapper} 
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if(e.key === 'Enter') setSelectedCert(cert) }}
              >
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className={styles.thumbnail} loading="lazy" />
                ) : (
                  <div className={styles.thumbnailPlaceholder}>
                    <span className="mono">{cert.issuer}</span>
                  </div>
                )}
                <div className={styles.overlay}>
                  <ZoomIn size={24} />
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{cert.name}</h3>
                <div className={styles.meta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>
                {cert.details && <p className={styles.details}>{cert.details}</p>}
                
                <div className={styles.footer}>
                  <span className={clsx(styles.credential, "mono")}>ID: {cert.credentialId}</span>
                  {cert.url !== '#' && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.verifyLink}>
                      Verify <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button 
                className={styles.closeBtn} 
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className={styles.modalImageWrapper}>
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.name} className={styles.modalImage} />
                ) : (
                  <div className={styles.modalPlaceholder}>
                    No image available for this certificate.
                  </div>
                )}
              </div>
              <div className={styles.modalDetails}>
                <h3 id="modal-title">{selectedCert.name}</h3>
                <p>{selectedCert.issuer} • {selectedCert.date}</p>
                {selectedCert.url !== '#' && (
                  <a href={selectedCert.url} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                    Verify Authenticity <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
