import Link from '../Link';
import LinkButton from '../LinkButton';
import Image from 'next/image';
import React from 'react';
import { Button } from '@material-ui/core';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link href="/">
      <Button size="small" color="primary">
        <Image
          className={styles.logo}
          src="/images/bluelogo.png"
          width={80}
          height={80}
        />
      </Button>
    </Link>
  );
};

export default Logo;
