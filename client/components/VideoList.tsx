import React from 'react';
import Link from 'next/link';
import styles from '../styles/VideoList.module.css';

const VideoList = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data.items.map(item => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <div className={styles.card}>
              <Link
                key={id}
                href={{
                  pathname: '/player/[id]',
                  query: { id: `${resourceId.videoId}` },
                }}
              >
                <img
                  src={medium.url}
                  height={medium.height}
                  width={medium.width}
                  alt="image"
                />
                {/* <h3>{title}</h3> */}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
