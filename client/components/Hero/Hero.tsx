import { Paper, Container } from '@material-ui/core';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <Paper className={styles.paper}>
        <div>
          <h1 className={styles.title}>Welcome to CodeTech TV</h1>
        </div>

        <p className={styles.description}>
          Learn how to code with free coding videos!
        </p>
      </Paper>
    </div>
  );
};

export default Hero;
