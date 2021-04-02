import { getSession } from 'next-auth/client';
import React from 'react';
import UserProfile from '../components/UserProfile';

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

const Profile = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default Profile;
