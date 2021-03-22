import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from '../../styles/Footer.module.css';
import Link from '../components/Link';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={styles.footer} showLabels>
      <BottomNavigationAction
        className={styles.icon}
        label="YouTube"
        icon={<YouTubeIcon style={{ color: '#F70D05' }} />}
      />

      <BottomNavigationAction
        className={styles.icon}
        label="Twitter"
        icon={<TwitterIcon style={{ color: '#2B91DA' }} />}
      />
      <BottomNavigationAction
        className={styles.icon}
        label="Email"
        icon={
          <Image src="/images/gmail.ico" alt="Gmail" width="30" height="30" />
        }
      />
    </BottomNavigation>
  );
}
