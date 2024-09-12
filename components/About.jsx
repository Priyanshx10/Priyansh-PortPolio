// About.js
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
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
      id="about" 
      className={styles.section}
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
    >
      <motion.h2 className={styles.heading} variants={itemVariants}>
        About Me
      </motion.h2>
      <motion.div 
        className={styles.imageContainer}
        variants={itemVariants}
      >
        <Image 
          src="/assets/profile.jpg" 
          width={180}
          height={180}
          alt="Priyansh Yadav" 
          className={styles.profilePicture}
        />
      </motion.div>
      <motion.p className={styles.paragraph} variants={itemVariants}>
        Hello, I&apos;m <span className={styles.highlight}>Priyansh Yadav</span>, a driven and results-oriented <span className={styles.highlight}>frontend developer</span> with over 4 year of experience in creating engaging and user-friendly web experiences. 
        With a BTech degree in Computer Science and Engineering, I have a solid foundation in web technologies including <span className={styles.highlight}>HTML, CSS, and JavaScript</span>, and I&apos;m expanding my expertise in <span className={styles.highlight}>React</span> and <span className={styles.highlight}>Next.js</span>.
      </motion.p>
      <motion.p className={styles.paragraph} variants={itemVariants}>
        I thrive in collaborative environments and possess excellent communication and problem-solving skills. I'm eager to contribute to a team that values creativity and continuous learning. 
        Let's build something remarkable together!
      </motion.p>
    </motion.section>
  );
};

export default About;
