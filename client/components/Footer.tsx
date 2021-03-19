import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright
      <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    </footer>
  );
};

export default Footer;
