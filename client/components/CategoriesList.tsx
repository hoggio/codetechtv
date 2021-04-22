import React from 'react';
import Link from './Link';
import { Paper, Typography } from '@material-ui/core';

const CategoriesList = ({ data }: any) => {
  return (
    <Paper>
      {data.items.map(item => {
        const { id, snippet = {} } = item;
        const { thumbnails = {}, title } = snippet;
        const { medium = {} } = thumbnails;

        return (
          <div key={id}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <div>
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
