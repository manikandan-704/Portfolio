import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.6 5.2 5.2 0 0 0-.1-3.6s-1.1-.4-3.6 1.3a12.8 12.8 0 0 0-6.6 0C6.1 2.3 5 2.7 5 2.7a5.2 5.2 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';
import styles from './Contact.module.css';
import { clsx } from 'clsx';

export default function Contact() {
  const { email, socials } = portfolioData.about;
  const formRef = useRef();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.honeypot) return; // SPAM detected
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('loading');
    
    // TODO: Replace with real EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Simulating API call for now
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '', honeypot: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={`container section-padding`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mono">/05. CONTACT</h2>
        <div className={styles.line}></div>
      </motion.div>

      <div className={styles.grid}>
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.title}>Let's build something.</h3>
          <p className={styles.description}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className={styles.emailCard}>
            <div className={styles.emailWrapper}>
              <Mail className={styles.emailIcon} />
              <span className={clsx(styles.emailText, "mono")}>{email}</span>
            </div>
            <button className={styles.copyBtn} onClick={copyEmail} aria-label="Copy email">
              {copied ? <Check size={18} className={styles.successColor} /> : <Copy size={18} />}
            </button>
          </div>

          <div className={styles.socials}>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </motion.div>

        <motion.form 
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input 
            type="text" 
            name="honeypot" 
            style={{ display: 'none' }} 
            value={formState.honeypot}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className={styles.formGroup}>
            <label htmlFor="name" className="mono">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formState.name} 
              onChange={handleChange} 
              required 
              className={styles.input}
              placeholder="John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className="mono">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formState.email} 
              onChange={handleChange} 
              required 
              className={styles.input}
              placeholder="john@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className="mono">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formState.message} 
              onChange={handleChange} 
              required 
              rows="5"
              className={styles.input}
              placeholder="Hello, I'd like to talk about..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className={styles.successMsg}>Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className={styles.errorMsg}>Something went wrong. Please try emailing me directly.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
