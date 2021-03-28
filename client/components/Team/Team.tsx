import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';
import Image from 'next/image';
import styles from './Team.module.css';

const Team = () => {
  return (
    <div className={styles.section}>
      <Typography gutterBottom variant="h5" component="h2">
        Meet Our Team
      </Typography>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={4}>
            <Card className={styles.card}>
              <div className={styles.avatarDiv}>
                <Image
                  alt="Jeff Hogg"
                  src="/images/me.jpg"
                  className={styles.avatar}
                  width={80}
                  height={80}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jeff Hogg
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Jeff is a full-stack web developer from Napa, CA. A U.C.
                  Berkelely bootcamp snd San Francisco State University
                  graduate.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions className={styles.social}>
                <Button className={styles.button} size="small" color="primary">
                  <a
                    href="https://www.linkedin.com/in/jeffhogg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn style={{ color: '#2066C2' }} />
                  </a>
                </Button>
                <Button className={styles.button} size="small" color="primary">
                  <a
                    href="https://github.com/jeffhogg86"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub style={{ color: '#24292E' }} />
                  </a>
                </Button>
                <Button className={styles.button} size="small" color="primary">
                  <a
                    href="https://twitter.com/JeffHogg86"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter style={{ color: '#2B91DA' }} />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Team;
