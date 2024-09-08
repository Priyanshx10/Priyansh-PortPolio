import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Pro.module.css';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    image: "/images/ecommerce-project.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://your-ecommerce-platform.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/images/task-management-app.jpg",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/task-management-app",
    liveLink: "https://your-task-app.com"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
    image: "/images/weather-dashboard.jpg",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Styled Components"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://your-weather-app.com"
  },
  {
    title: "Social Media Analytics Tool",
    description: "A comprehensive analytics tool for social media managers to track engagement and growth across platforms.",
    image: "/images/social-media-analytics.jpg",
    technologies: ["Angular", "Express.js", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/yourusername/social-media-analytics",
    liveLink: "https://your-analytics-tool.com"
  }
];

// ... (previous imports and projectsData remain unchanged)

const ProjectCard = ({ title, description, image, technologies, githubLink, liveLink }) => (
  <motion.li 
    className={styles.projectItem}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Image
      src={image}
      alt={title}
      width={600}
      height={300}
      className={styles.projectImage}
    />
    <div className={styles.projectContent}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.technologyTag}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.projectLinks}>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          <FaGithub className={styles.linkIcon} />
          GitHub
        </a>
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${styles.projectLink} ${styles.liveLink}`}
        >
          <FaExternalLinkAlt className={styles.linkIcon} />
          Live Demo
        </a>
      </div>
    </div>
  </motion.li>
);

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <ul className={styles.projectList}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ul>
    </motion.section>
  );
};

export default Projects;