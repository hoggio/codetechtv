import Head from 'next/head';
import Player from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import styles from '../../styles/Home.module.css';

const channelId = 'UCSTOp5FPjNXBmop3o47yZaQ';
const uploadsId = 'UUSTOp5FPjNXBmop3o47yZaQ';

const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsId}&part=snippet&maxResults=50`;

export async function getServerSideProps() {
  console.log(process.env.YOUTUBE_API_KEY);

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

export default function Videos({ data }) {
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VideoList data={data} />
      </main>
    </div>
  );
}
