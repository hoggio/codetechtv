import React from 'react';
import Link from 'next/link';
import styles from '../../styles/VideoRow.module.css';

const VideoRow = ({ data }) => {
  return (
    <div className={styles.videoRow}>
      {data.items.map(item => {
        const { id, snippet = {} } = item;
        const { thumbnails = {}, title, resourceId } = snippet;

        return (
          <Link
            key={id}
            href={{
              pathname: '/videos/[id]',
              query: { id: `${resourceId.videoId}` },
            }}
          >
            <img
              className={styles.image}
              src={thumbnails.default.url}
              height={thumbnails.default.height}
              width={thumbnails.default.width}
              alt={title}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoRow;
