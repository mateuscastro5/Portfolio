import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const NavButton = styled(ScrollLink)`
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

export const LandingContainer = styled.div`
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

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  animation: fadeIn 2s ease-in;
  font-family: 'Roboto', sans-serif;
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 1rem;
  animation: fadeIn 2s ease-in 1s;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

export const Button = styled(ScrollLink)`
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

export const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#fff'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center; /* Alinha a imagem ao centro verticalmente */
`;

export const AboutTextWrapper = styled.div`
  flex: 1;
  max-width: 60%; /* Define a largura máxima para o texto */
`;

export const AboutTitle = styled.h2`
  font-size: 3rem; /* Aumenta o tamanho do título */
  font-family: 'Roboto', sans-serif;
`;

export const AboutText = styled.p`
  font-size: 1.2rem; /* Aumenta o tamanho do texto */
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SkillCard = styled.div`
  background: #333;
  padding: 1rem;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
  color: #fff;
`;

export const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-family: 'Roboto', sans-serif;
`;

export const ProfileImageWrapper = styled.div`
  flex: 0 0 200px; /* Aumenta a largura da imagem */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 200px; /* Aumenta o tamanho da imagem */
  height: 200px;
  object-fit: cover;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const ProjectCard = styled.a`
  background: #333;
  padding: 2rem;
  border-radius: 5px;
  width: calc(33.333% - 2rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: #444;
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-family: 'Roboto', sans-serif;
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`;

export const MoreProjectsButton = styled(Link)`
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

export const ContactSection = styled.section`
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

export const Footer = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 2rem 0;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  margin: 0;
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }
`;

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const BackgroundCard = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  width: 250px;
  height: 150px;
  filter: blur(5px);
  animation: moveBackground 20s linear infinite;

  @keyframes moveBackground {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100vw, 100vh);
    }
  }
`;
