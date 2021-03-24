import { Paper, Typography } from '@material-ui/core';
import styles from '../styles/Statement.module.css';

const Statement = () => {
  return (
    <div className={styles.section}>
      <Typography gutterBottom variant="h5" component="h2">
        Mission Statement
      </Typography>
      <Paper className={styles.text}>
        <Typography gutterBottom variant="body1" component="h2">
          CodeTech TV aims to provide coding tutorials and instructional videos
          to anyone, for free. It is our goal is to spread the knowledge of
          coding to anyone who wants to learn.
        </Typography>
      </Paper>
    </div>
  );
};

export default Statement;
