import React from 'react';
import Head from 'next/head';
import CategoriesList from '../../components/CategoriesList';
import { YOUTUBE_PLAYLISTS_API } from '../../constants/videoConstants';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLISTS_API}&key=${process.env.YOUTUBE_API_KEY}`
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

export default function Categories({ data }: any) {
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CategoriesList data={data} />
      </main>
    </div>
  );
}
