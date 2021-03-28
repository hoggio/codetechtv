// import { connectToDatabase } from '../util/mongodb';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Container, Paper } from '@material-ui/core';
import Head from 'next/head';
import Hero from '../components/Hero';
import VideosButton from '../components/VideosButton';
import WatchButton from '../components/WatchButton';
import { YOUTUBE_PLAYLIST_ITEMS_API } from '../constants/videoConstants';

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

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export default function Home({ data }: any) {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
      <VideosButton />
      <WatchButton data={data} />
    </Container>
  );
}
