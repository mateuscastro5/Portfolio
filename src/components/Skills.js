// Skills.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  color: #333;
  text-align: center;
`;

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 2s ease-in;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  margin: 1rem;
`;

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsTitle>Habilidades</SkillsTitle>
        <SkillsList>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>Python</SkillItem>
          {/* Adicione mais habilidades conforme necessário */}
        </SkillsList>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;
