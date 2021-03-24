import { Typography } from '@material-ui/core';
import styles from '../styles/Statement.module.css';

const Statement = () => {
  return (
    <div className={styles.section}>
      <Typography gutterBottom variant="h5" component="h2">
        Mission Statement
      </Typography>
      <div className={styles.text}>
        <Typography gutterBottom variant="body1" component="h2">
          CodeTech TV aims to provide coding tutorials and instructional videos
          to anyone, for free. Our goal is to teach people how to code, learn
          new technologies, frameworks, and languages.
        </Typography>
      </div>
    </div>
  );
};

export default Statement;
