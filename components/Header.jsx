import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50 && !isScrolled) {
        setIsScrolled(true);
        controls.start({ y: 0, opacity: 1 });
      } else if (scrollPosition <= 50 && isScrolled) {
        setIsScrolled(false);
        controls.start({ y: -100, opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, controls]);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  return (
    <motion.header
      className={styles.header}
      initial="hidden"
      animate={controls}
      variants={headerVariants}
    >
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {['About', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} className={styles.navItem}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                className={styles.navLink}
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;