import { Paper, Container } from '@material-ui/core';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div>
      <Paper className={styles.paper}>
        <Container>
          <h1 className={styles.title}>Welcome to CodeTech TV</h1>
        </Container>

        <p className={styles.description}>
          Learn how to code with free coding videos!
        </p>
      </Paper>
    </div>
  );
};

export default Hero;
