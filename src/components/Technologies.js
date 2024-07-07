import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.div)`
  padding: 60px 20px;
  text-align: center;
`;

const Technologies = () => {
  return (
    <Section
      id="technologies"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Tecnologias</h2>
      <p>Python, TensorFlow, PyTorch, React, Node.js, etc.</p>
    </Section>
  );
};

export default Technologies;
