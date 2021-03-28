import LinkButton from './LinkButton';
import React from 'react';

const VideosButton = React.forwardRef(() => {
  return (
    <LinkButton href="/videos" variant="contained" color="primary">
      Videos
    </LinkButton>
  );
});

export default VideosButton;
