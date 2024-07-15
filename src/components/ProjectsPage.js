import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden; /* Impede scroll horizontal */
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  max-width: 1200px;
`;

const ProjectCard = styled.a`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: calc(50% - 2rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
  text-align: center;
  color: #333;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #e50914;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin: 0.5rem 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #e50914;
  margin-bottom: 1.5rem;
  animation: slideInDown 1s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const projects = [
    { title: 'Projeto 1', description: 'Descrição do projeto 1.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 2', description: 'Descrição do projeto 2.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 3', description: 'Descrição do projeto 3.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 4', description: 'Descrição do projeto 4.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 5', description: 'Descrição do projeto 5.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 6', description: 'Descrição do projeto 6.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 7', description: 'Descrição do projeto 7.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 8', description: 'Descrição do projeto 8.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 9', description: 'Descrição do projeto 9.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 10', description: 'Descrição do projeto 10.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 11', description: 'Descrição do projeto 11.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
    { title: 'Projeto 12', description: 'Descrição do projeto 12.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
  ];

  return (
    <Section>
      <Title>Meus Projetos</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard href={project.link} target="_blank" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default ProjectsPage;
