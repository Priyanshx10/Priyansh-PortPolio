import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMedium, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: FaEnvelope, link: 'mailto:priyanshyadav1012@gmail.com', label: 'Email' },
    { icon: FaGithub, link: 'https://github.com/Priyanshx10', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/priyansh10', label: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://x.com/Priyanshx10_', label: 'Twitter' },
    { icon: FaMedium, link: 'https://medium.com/@ypriyansh998', label: 'Medium' },
    { icon: FaPhone, link: 'tel:+917000566395', label: 'Phone' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <motion.section
      id="contact"
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className={styles.heading} variants={itemVariants}>
        Contact Me
      </motion.h2>
      <motion.p className={styles.contactInfo} variants={itemVariants}>
        Let's connect! Feel free to reach out through any of the following channels:
      </motion.p>
      <motion.div className={styles.socialLinks}>
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;