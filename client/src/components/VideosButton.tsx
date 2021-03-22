import Link from 'next/link';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';

const VideosButton = React.forwardRef(() => {
  return (
    <Link href="/videos" passHref>
      <Button variant="contained" color="primary">
        <PlayArrowIcon />
        Videos
      </Button>
    </Link>
  );
});

export default VideosButton;
