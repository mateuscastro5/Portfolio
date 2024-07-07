import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#fff'};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  min-height: 100vh;
  box-sizing: border-box;
  flex-direction: ${({ direction }) => direction || 'row'};
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #333;
  padding: 2rem;
  border-radius: 5px;
  width: calc(50% - 2rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
  text-align: center;
  color: #fff;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-family: 'Roboto', sans-serif;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`;

const ProjectsPage = () => {
  const projects = [
    { title: 'Projeto 1', description: 'Descrição do projeto 1.' },
    { title: 'Projeto 2', description: 'Descrição do projeto 2.' },
    { title: 'Projeto 3', description: 'Descrição do projeto 3.' },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <Section bg="#000" color="#fff">
      <h2>Meus Projetos</h2>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default ProjectsPage;
