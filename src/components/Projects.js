// Projects.js
import React, { useEffect } from 'react'; 
import styled from 'styled-components';
import AOS from 'aos';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  color: #333;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ProjectsSection id="projects">
      <h2>Projetos</h2>
      <ProjectsContainer>
        <ProjectCard data-aos="fade-up">
          <ProjectImage src="/path-to-project-image.jpg" alt="Project" />
          <ProjectTitle>Projeto 1</ProjectTitle>
          <ProjectDescription>
            Descrição do projeto 1.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard data-aos="fade-up" data-aos-delay="200">
          <ProjectImage src="/path-to-project-image.jpg" alt="Project" />
          <ProjectTitle>Projeto 2</ProjectTitle>
          <ProjectDescription>
            Descrição do projeto 2.
          </ProjectDescription>
        </ProjectCard>
        {/* Adicione mais projetos conforme necessário */}
      </ProjectsContainer>
    </ProjectsSection>
  );
}

export default Projects;
