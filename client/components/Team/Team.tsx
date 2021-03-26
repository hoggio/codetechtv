import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Typography,
  Theme,
} from '@material-ui/core';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';
import styles from './Team.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  })
);

const Team = () => {
  const classes = useStyles();
  return (
    <div className={styles.section}>
      <Typography gutterBottom variant="h5" component="h2">
        Meet the team
      </Typography>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={4}>
            <Card className={styles.card}>
              <div className={styles.avatarDiv}>
                <Avatar
                  alt="Jeff Hogg"
                  src="/images/me.jpg"
                  className={classes.large}
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
          {/* <Grid item xs={12} sm={12} md={4}>
            Card
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            Card
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Team;
