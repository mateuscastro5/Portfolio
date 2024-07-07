// Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  color: #333;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 2s ease-in;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ContactTextarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

const ContactButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  color: white;
  background: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contato</ContactTitle>
        <ContactForm>
          <ContactInput type="text" placeholder="Nome" required />
          <ContactInput type="email" placeholder="Email" required />
          <ContactTextarea placeholder="Mensagem" required />
          <ContactButton type="submit">Enviar</ContactButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;
