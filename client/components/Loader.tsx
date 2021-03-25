import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h5" component="h2">
        Loading...
      </Typography>
      <CircularProgress />
    </div>
  );
};

export default Loader;
