// import { connectToDatabase } from '../util/mongodb';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Container, Paper } from '@material-ui/core';
import Head from 'next/head';
import VideosButton from '../components/VideosButton';
import styles from '../styles/Home.module.css';

// Get from MongoDB

// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();

//   const data = await db
//     .collection('listingsAndReviews')
//     .find({})
//     .limit(20)
//     .toArray();

//   const properties = JSON.parse(JSON.stringify(data));
//   console.log(properties);

//   return {
//     props: { properties: properties },
//   };
// }

// { properties }

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Paper className={styles.paper}>
          <Container>
            <h1 className={styles.title}>Welcome to CodeTech TV</h1>
          </Container>

          <p className={styles.description}>
            Learn how to code with free coding videos!
          </p>
        </Paper>
        {/* {!session && (
          <>
            Not Signed In <br />
            <button onClick={signIn}> Sign In</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div> You are logged in</div>
            <button onClick={signOut}>Sign Out</button>
          </>
        )} */}
        <VideosButton />
      </main>
    </Container>
  );
}
