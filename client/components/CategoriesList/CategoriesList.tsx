import React from 'react';
import Link from '../Link';
import styles from './CategoriesList.module.css';
import { Paper, Typography } from '@material-ui/core';

const CategoriesList = ({ data }: any) => {
  return (
    <Paper className={styles.container}>
      {data.items.map(item => {
        const { id, snippet = {} } = item;
        const { thumbnails = {}, title } = snippet;
        const { medium = {} } = thumbnails;
        console.log(item);

        return (
          <div className={styles.container} key={id}>
            <div className={styles.item}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <div className={styles.image}>
                <Link
                  href={{
                    pathname: '/categories/[id]',
                    query: { id: `${id}` },
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
            </div>
          </div>
        );
      })}
    </Paper>
  );
};

export default CategoriesList;
