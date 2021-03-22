import React from 'react';
import Link from 'next/link';
import styles from '../../styles/VideoList.module.css';
import { Grid, Paper } from '@material-ui/core';

const VideoList = ({ data }: any) => {
  return (
    <Paper className={styles.container}>
      {data.items.map(item => {
        const { id, snippet = {} } = item;
        const { thumbnails = {}, resourceId, description } = snippet;
        const { medium = {} } = thumbnails;
        const descList = description.split('\n');
        const desc = descList[0];

        return (
          <Grid container key={id} className={styles.item}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="image">
                <Link
                  href={{
                    pathname: '/videos/[id]',
                    query: { id: `${resourceId.videoId}` },
                  }}
                >
                  <img
                    src={medium.url}
                    height={medium.height}
                    width={medium.width}
                    alt="image"
                  />
                </Link>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={styles.text}>
                <p>{desc}</p>
              </div>
            </Grid>
          </Grid>
        );
      })}
    </Paper>
  );
};

export default VideoList;
