import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';

const Loader = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Loading...
      </Typography>
      <CircularProgress />
    </div>
  );
};

export default Loader;
