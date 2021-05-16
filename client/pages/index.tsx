import Head from 'next/head';
import Hero from '../components/Hero';
import AmazonBanner from '../components/AmazonBanner';
import { YOUTUBE_ALL_VIDEOS_API } from '../constants/videoConstants';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_ALL_VIDEOS_API}&key=${process.env.YOUTUBE_API_KEY}`
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
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <AmazonBanner />
      </main>
    </div>
  );
}
