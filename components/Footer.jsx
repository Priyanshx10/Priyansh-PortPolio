import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.name}>Priyansh Yadav</h3>
            <p className={styles.tagline}>Web Developer & Designer</p>
          </div>
          <div className={styles.right}>
            <nav className={styles.nav}>
              <a href="#home" className={styles.navLink}>Home</a>
              <a href="#about" className={styles.navLink}>About</a>
              <a href="#projects" className={styles.navLink}>Projects</a>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </nav>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Priyanshx10" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/priyansh10" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaLinkedin />
          </a>
          <a href="https://x.com/Priyanshx10_" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaTwitter />
          </a>
          <a href="mailto:priyanshyadav1012@gmail.com" className={styles.socialLink}>
            <FaEnvelope />
          </a>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {currentYear} Priyansh Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;