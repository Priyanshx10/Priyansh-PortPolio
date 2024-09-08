import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.content}>
        <motion.h1 
          className={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Priyansh
        </motion.h1>
        <motion.h2 
          className={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Web Developer & Designer
        </motion.h2>
        <motion.div 
          className={styles.cta}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#contact" className={styles.button}>Get in touch</a>
          <a href="/path-to-your-cv.pdf" download className={`${styles.button} ${styles.downloadButton}`}>
            <FaDownload className={styles.downloadIcon} />
            Download CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;