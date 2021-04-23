import React from 'react';
import Link from './Link';
import { Paper, Typography } from '@material-ui/core';

const VideoRow = ({ data }: any) => {
  return (
    <Paper>
      <Typography variant="body2" color="inherit" component="p">
        Similar videos:
      </Typography>
      <div>
        {data.items
          // Optional Limit to 5
          .filter((item, i) => i < 5)
          .map(item => {
            const { id, snippet = {} } = item;
            const { thumbnails = {}, title, resourceId } = snippet;

            return (
              <Link
                key={id}
                href={{
                  pathname: '/player/[id]',
                  query: { id: `${resourceId.videoId}` },
                }}
              >
                <img
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
