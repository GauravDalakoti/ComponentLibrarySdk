import React, { useState } from 'react';
import Container from '../components/Container/Container';
import Dropzone from '../components/dropzone/Dropzone';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField/Input';
import { assets } from '../assets/assets';
import styles from "./TicketForm.module.css"

const TicketFormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [avatar, setAvatar] = useState<File | undefined>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', { state: { name, email, github, avatar } });
  };

  return (
    <Container>
      <img className={styles.imgbottom} src={assets.pattern_bottom} alt="" />
      <img className={styles.imgtop} src={assets.pattern_top} alt="" />
      <img src={assets.logo} ></img>
      <h1 className={styles.heading}>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p className={styles.subheading}>Secure your spot at next year’s biggest coding conference.</p>
      <form onSubmit={handleSubmit} className={styles.formContainer}>

        <Dropzone onFileSelect={(file) => setAvatar(file)} />
        <InputField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="GitHub Username" value={github} onChange={(e) => setGithub(e.target.value)} />
        <Button type="submit">Generate My Ticket</Button>
      </form>
    </Container>
  );
};

export default TicketFormPage;