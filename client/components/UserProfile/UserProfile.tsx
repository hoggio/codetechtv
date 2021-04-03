import { useSession } from 'next-auth/client';
import { Card, CardContent, Typography } from '@material-ui/core';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      {!session && <>Sign In</>}
      {session && (
        <>
          <Card className={styles.card}>
            <img
              className={styles.avatar}
              src={session.user.image}
              alt="user image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {session.user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {session.user.email}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default UserProfile;
