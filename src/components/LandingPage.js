import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ProfileImage from '../images/Foto.jpeg';  // Atualize o caminho da imagem
import {
  Navbar,
  NavButton,
  LandingContainer,
  Title,
  Subtitle,
  Button,
  Section,
  AboutContainer,
  AboutTextWrapper,
  AboutTitle,
  AboutText,
  SkillsContainer,
  SkillCard,
  SkillTitle,
  ProfileImageWrapper,
  ProfileImg,
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  MoreProjectsButton,
  ContactSection,
  Footer,
  FooterText,
  SocialIcons,
  SocialIconLink,
  BackgroundAnimation,
  BackgroundCard
} from './styles/LandingPageStyles'; // Certifique-se de que o caminho esteja correto

const projects = [
  { title: 'Projeto 1', description: 'Descrição do projeto 1.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
  { title: 'Projeto 2', description: 'Descrição do projeto 2.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
  { title: 'Projeto 3', description: 'Descrição do projeto 3.', link: 'https://github.com/mateuscastro5/ProjetoFinalWEB' },
  // Adicione mais projetos conforme necessário
];

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

function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);

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
          <AboutTextWrapper>
            <AboutTitle>Sobre Mim</AboutTitle>
            <AboutText>
              Sou estudante de ADS na SENAC Centro Universitário e trabalho como assistente de vendas na Gastrel Distribuidora. Atualizo e analiso dados de vendas em Excel, criando relatórios estratégicos para a empresa. Também estou desenvolvendo uma aplicação para automatizar serviços, melhorando a eficiência.
              <br /><br />
              Tenho habilidades em Python, Node.js, React, e sou proficiente em bibliotecas de análise de dados como Pandas. Meu objetivo é me tornar um pesquisador em ciência de dados e explorar oportunidades no exterior.
              <br /><br />
              Sou dedicado, curioso e sempre em busca de novos desafios.
            </AboutText>
          </AboutTextWrapper>
          <ProfileImageWrapper>
            <ProfileImg src={ProfileImage} alt="Profile" />
          </ProfileImageWrapper>
        </AboutContainer>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <SkillTitle>{skill}</SkillTitle>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Section>

      <Section id="projects" bg="#f0f0f0" color="#333">
        <BackgroundAnimation>
          {projects.map((project, index) => (
            <BackgroundCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </BackgroundCard>
          ))}
        </BackgroundAnimation>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard href={project.link} target="_blank" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectsContainer>
        <MoreProjectsButton to="/projects">Ver Todos os Projetos</MoreProjectsButton>
      </Section>

      <ContactSection id="contact">
        <h2>Contato</h2>
        <ContactForm />
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
