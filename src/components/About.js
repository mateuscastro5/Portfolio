// About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  color: #333;
  text-align: center;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 2s ease-in;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutTitle>Sobre Mim</AboutTitle>
        <AboutText>
          Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. Tenho experiência em diversas tecnologias e sempre estou buscando aprender mais.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
