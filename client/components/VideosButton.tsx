import LinkButton from './LinkButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';

const VideosButton = React.forwardRef(() => {
  return (
    <LinkButton href="/videos" variant="contained" color="primary">
      <PlayArrowIcon />
      Videos
    </LinkButton>
  );
});

export default VideosButton;
