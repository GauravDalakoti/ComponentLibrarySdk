import React from 'react';
import { useLocation } from 'react-router-dom';
import Ticket from '../components/Ticket/Ticket';
import Container from '../components/Container/Container';
import { assets } from '../assets/assets';
import styles from "./TicketResult.module.css"

const TicketResultPage: React.FC = () => {
  const location = useLocation();
  const { name, email, github, avatar } = location.state || {};

  if (!name || !email || !github) {
    return <Container><p>Missing ticket information.</p></Container>;
  }

  return (
    <Container>
      <img className={styles.imgbottom} src={assets.pattern_bottom} alt="" />
      <img className={styles.imgtop} src={assets.pattern_top} alt="" />
      <img src={assets.logo} ></img>
      <h1>
        Congrats, <span className={styles.gradientText}>{name.split(' ')[0]}</span> {name.split(' ').slice(1).join(' ')}!
        <br />Your ticket is ready.
      </h1>
      <p>
        We’ve emailed your ticket to <span className={styles.subheading}>{email}</span> and will send updates in the run up to the event.
      </p>

      <Ticket name={name} github={github} avatar={avatar} />
    </Container>
  );
};

export default TicketResultPage;

