import Link from './Link';
import LinkButton from './LinkButton';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';

const VideosButton = React.forwardRef(() => {
  return (
    <LinkButton href="/videos" variant="contained" color="primary">
      {/* <Button variant="contained" color="primary"> */}
      <PlayArrowIcon />
      Videos
      {/* </Button> */}
    </LinkButton>
  );
});

export default VideosButton;
