import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    imageUrl: 'link-para-imagem'
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    imageUrl: 'link-para-imagem'
  },
  // Adicione mais projetos
];

const ProjectCard = styled.div`
  background-color: #2b2b2b;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </Slider>
  );
};

export default Carousel;
