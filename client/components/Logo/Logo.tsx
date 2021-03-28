import Link from '../Link';
import LinkButton from '../LinkButton';
import Image from 'next/image';
import React from 'react';
import { Button } from '@material-ui/core';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <LinkButton variant="outlined" color="secondary" href="/">
      <Image
        className={styles.logo}
        src="/images/bluelogo.png"
        width={50}
        height={50}
      />
    </LinkButton>
  );
};

export default Logo;
