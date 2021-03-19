import React from 'react';
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
            <a
              key={id}
              href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              className={styles.card}
            >
              <img
                src={medium.url}
                height={medium.height}
                width={medium.width}
                alt="image"
              />
              <h3>{title}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
