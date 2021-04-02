import LinkButton from './LinkButton';
import React from 'react';

const VideosButton = React.forwardRef(() => {
  return (
    <LinkButton href="/categories" variant="contained" color="primary">
      Categories
    </LinkButton>
  );
});

export default VideosButton;
