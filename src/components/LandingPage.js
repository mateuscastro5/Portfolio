import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const NavButton = styled(ScrollLink)`
  color: white;
  margin: 0 1rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 0.2rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    height: 2px;
    background: #e50914;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #e50914;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/gradient.png') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  animation: fadeIn 2s ease-in;
  font-family: 'Roboto', sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 1rem;
  animation: fadeIn 2s ease-in 1s;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const Button = styled(ScrollLink)`
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  color: white;
  background: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.6s ease, transform 0.3s ease;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;

  &:hover {
    background: #b20710;
    transform: scale(1.05);
  }
`;

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

const AboutContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
`;

const SkillsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
`;

const SkillCard = styled.div`
  background: #333;
  padding: 1rem;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
  color: #fff;
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-family: 'Roboto', sans-serif;
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

const MoreProjectsButton = styled(ScrollLink)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: white;
  background: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.6s ease, transform 0.3s ease;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #b20710;
    transform: scale(1.05);
  }
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: 100vh;
  box-sizing: border-box;
  flex-direction: column;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const ContactField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;

  &:hover {
    background: #b20710;
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 2rem 0;
`;

const FooterText = styled.p`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  margin: 0;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }
`;

function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'HTML',
    'CSS',
    'Git',
    'MongoDB',
    'SQL',
    'AWS'
  ];

  const projects = [
    { title: 'Projeto 1', description: 'Descrição do projeto 1.' },
    { title: 'Projeto 2', description: 'Descrição do projeto 2.' },
    { title: 'Projeto 3', description: 'Descrição do projeto 3.' },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <>
      <Navbar>
        <NavButton to="home" smooth={true} duration={500}>Home</NavButton>
        <NavButton to="about" smooth={true} duration={500}>Sobre Mim</NavButton>
        <NavButton to="projects" smooth={true} duration={500}>Projetos</NavButton>
        <NavButton to="contact" smooth={true} duration={500}>Contato</NavButton>
      </Navbar>
      
      <LandingContainer id="home">
        <Title>Mateus Fagundes</Title>
        <Subtitle>Desenvolvedor de IA</Subtitle>
        <Button to="about" smooth={true} duration={500}>Sobre Mim</Button>
      </LandingContainer>

      <Section id="about" bg="#1c1c1c">
        <AboutContainer>
          <h2>Sobre Mim</h2>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend ultricies. Nam convallis volutpat massa, eu pretium massa suscipit in. Sed ac felis sit amet urna convallis varius. Mauris a est vel mi facilisis vestibulum.
          </AboutText>
        </AboutContainer>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <SkillTitle>{skill}</SkillTitle>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Section>

      <Section id="projects" bg="#000">
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectsContainer>
        <MoreProjectsButton to="projects" smooth={true} duration={500}>Ver Todos os Projetos</MoreProjectsButton>
      </Section>

      <ContactSection id="contact">
        <h2>Contato</h2>
        <ContactForm>
          <ContactField>
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" placeholder="Digite seu nome" />
          </ContactField>
          <ContactField>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Digite seu email" />
          </ContactField>
          <ContactField>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" rows="6" placeholder="Digite sua mensagem" />
          </ContactField>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ContactForm>
      </ContactSection>

      <Footer>
        <FooterText>&copy; 2024 Mateus Fagundes. Todos os direitos reservados.</FooterText>
        <SocialIcons>
          <SocialIconLink href="https://github.com/mateuscastro5" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/in/mateus-fagundes-818009155/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink href="https://www.instagram.com/mateus.sql/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>
      </Footer>
    </>
  );
}

export default LandingPage;
