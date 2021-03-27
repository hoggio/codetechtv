import { Paper, Typography } from '@material-ui/core';
import styles from './Statement.module.css';

const Statement = () => {
  return (
    <div className={styles.section}>
      <Typography gutterBottom variant="h5" component="h2">
        Mission Statement
      </Typography>
      <div className={styles.text}>
        <Typography gutterBottom variant="body1" component="h2">
          It is our mission to provide coding tutorials and instructional videos
          to anyone, for free. Our goal is to spread the knowledge of coding to
          anyone who wants to learn.
        </Typography>
      </div>
    </div>
  );
};

export default Statement;
