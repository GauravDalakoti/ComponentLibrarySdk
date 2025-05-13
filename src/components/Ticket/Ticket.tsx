import React from 'react';
import styles from './Ticket.module.css';
import { assets } from '../../assets/assets';

type TicketProps = {
  name: string;
  github: string;
  avatar?: File;
};

const Ticket: React.FC<TicketProps> = ({ name, github, avatar }) => {
  const imageUrl = avatar ? URL.createObjectURL(avatar) : '/default-avatar.png';
  return (
    <div className={styles.ticket}>
      <div>
        <img src={assets.logo} alt="" />
        <div className={styles.footer}>June 21, 2025 • Austin, TX</div>
      </div>
      <div className={styles.details}>
        <img src={imageUrl} alt="avatar" className={styles.avatar} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.githubDetails}>
            <img src={assets.github} alt="" />
            <p className={styles.github}>@{github}</p>
          </div>
        </div>
      </div>
      <div className={styles.ticketNumberWrapper}>
        <span className={styles.ticketNumber}>#09894</span>
      </div>

    </div>
  );
};

export default Ticket;