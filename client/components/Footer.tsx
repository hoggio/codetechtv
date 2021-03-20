import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>Copyright</p>
      <img
        src="/images/longlogo.png"
        alt="CodeTechTV Logo"
        className={styles.logo}
      />
    </footer>
  );
};

export default Footer;
