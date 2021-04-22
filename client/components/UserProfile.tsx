import { useSession } from 'next-auth/client';
import { Card, CardContent, Typography } from '@material-ui/core';

const UserProfile = () => {
  const [session, loading] = useSession();

  return (
    <div>
      {!session && <>Sign In</>}
      {session && (
        <>
          <Card>
            <img src={session.user.image} alt="users image" />
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
