// components/Button.js
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
