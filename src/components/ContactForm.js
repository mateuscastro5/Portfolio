import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactFormContainer = styled.div`
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

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_muu8flb', 'template_xmo2j8b', form.current, 'l6h9MYPUc6fMtAZpl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <ContactFormContainer>
      <form ref={form} onSubmit={sendEmail}>
        <ContactField>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" name="user_name" id="name" placeholder="Digite seu nome" required />
        </ContactField>
        <ContactField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="user_email" id="email" placeholder="Digite seu email" required />
        </ContactField>
        <ContactField>
          <Label htmlFor="message">Mensagem</Label>
          <Textarea name="message" id="message" rows="6" placeholder="Digite sua mensagem" required />
        </ContactField>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
