import React from 'react';
import Link from 'next/link';
import styles from './VideoRow.module.css';
import { Paper } from '@material-ui/core';

const VideoRow = ({ data }: any) => {
  return (
    <Paper className={styles.container}>
      <div className={styles.videoRow}>
        {data.items
          // Optional Limit to 5
          // .filter((item, i) => i < 5)
          .map(item => {
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
    </Paper>
  );
};

export default VideoRow;
